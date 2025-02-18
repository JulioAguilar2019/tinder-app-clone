import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS
} from 'react-native-reanimated';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { IUser } from '../../../global/interfaces/user.interface';
import { RootStackParamList } from '../../../navigation/navigation.types';
import { FooterCard } from './FooterButtons';
import { useCardContext } from '../../hooks/CardContext';

export const CardWith = Dimensions.get('window').width * 0.85;
const screenWidth = Dimensions.get('window').width;

type ImageCardProps = {
    user: IUser;
    numOfCards: number;
    index: number;
};

export const ImageCard = ({ user, numOfCards, index }: ImageCardProps) => {
    const { activeIndex, incrementIndex } = useCardContext();
    const translationX = useSharedValue(0);
    const superLike = useSharedValue(0);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute();
    const currentRouteName = route.name;

    const isFriendshipScreen = currentRouteName === 'Friendship';
    const isDatesScreen = currentRouteName === 'Dates';
    const isRelationshipScreen = currentRouteName === 'Relationship';

    const animatedCard = useAnimatedStyle(() => {
        if (activeIndex.value - index > 0.5) {
            return {
                opacity: 0,
                transform: [
                    { translateY: -index * 30 },
                    { scale: 1 - index * 0.03 }
                ]
            };
        }
        return {
            opacity: interpolate(
                activeIndex.value,
                [index - 1, index, index + 1],
                [0.8, 1, 1],
                Extrapolation.CLAMP
            ),
            transform: [
                {
                    scale: interpolate(
                        activeIndex.value,
                        [index - 1, index, index + 1],
                        [0.95, 1, 1]
                    )
                },
                {
                    translateY: interpolate(
                        activeIndex.value,
                        [index - 1, index, index + 1],
                        [-30, 0, 0]
                    )
                },
                { translateX: translationX.value },
                {
                    rotateZ: `${interpolate(
                        translationX.value,
                        [-screenWidth, 0, screenWidth],
                        [-15, 0, 15]
                    )}deg`
                }
            ]
        };
    });

    const leftOverlayStyle = useAnimatedStyle(() => {
        const alpha = interpolate(
            translationX.value,
            [-screenWidth / 2, 0],
            [0.8, 0],
            Extrapolation.CLAMP
        );
        return { opacity: translationX.value < 0 ? alpha : 0 };
    });

    const leftIconStyle = useAnimatedStyle(() => ({
        opacity: translationX.value < -50 ? 1 : 0
    }));

    const rightOverlayStyle = useAnimatedStyle(() => {
        const alpha = interpolate(
            translationX.value,
            [0, screenWidth / 2],
            [0, 0.8],
            Extrapolation.CLAMP
        );
        return { opacity: translationX.value > 0 ? alpha : 0 };
    });

    const rightIconStyle = useAnimatedStyle(() => ({
        opacity: translationX.value > 50 ? 1 : 0
    }));

    const superLikeBackgroundStyle = useAnimatedStyle(() => {
        const alpha = interpolate(superLike.value, [0, 1], [0, 0.5], Extrapolation.CLAMP);
        return { opacity: alpha };
    });

    const superLikeContainerStyle = useAnimatedStyle(() => ({
        opacity: superLike.value
    }));

    const gesture = Gesture.Pan()
        .onChange((event) => {
            translationX.value = event.translationX;
        })
        .onEnd((event) => {
            if (Math.abs(event.velocityX) > 400) {
                translationX.value = withSpring(
                    Math.sign(event.velocityX) * 500,
                    { velocity: event.velocityX }
                );
                runOnJS(incrementIndex)();
            } else {
                translationX.value = withSpring(0);
            }
        });

    const handleInformation = () => {
        navigation.navigate('Information', { user });
    };

    const handleDates = () => navigation.navigate('Dates');
    const handleFriendship = () => navigation.navigate('Friendship');
    const handleRelationship = () => navigation.navigate('Relationship');

    const localHandleNo = () => {
        translationX.value = withTiming(-500, { duration: 500 }, () => {
            runOnJS(incrementIndex)();
        });
    };

    const localHandleYes = () => {
        translationX.value = withTiming(500, { duration: 500 }, () => {
            runOnJS(incrementIndex)();
        });
    };

    const localHandleSuperLike = () => {
        superLike.value = withTiming(1, { duration: 300 }, () => {
            translationX.value = withTiming(500, { duration: 500 }, () => {
                runOnJS(incrementIndex)();
                superLike.value = 0;
            });
        });
    };

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View
                style={[
                    styles.card,
                    animatedCard,
                    {
                        zIndex: numOfCards - index,
                        transform: [
                            { translateY: -index * 30 },
                            { scale: 1 - index * 0.03 }
                        ]
                    }
                ]}
            >
                <View style={styles.topButtonsContainer}>
                    <View
                        style={[
                            styles.topButtonOuter,
                            isFriendshipScreen ? styles.activeTopButtonOuter : styles.inactiveTopButtonOuter
                        ]}
                    >
                        <TouchableOpacity style={styles.topButtonSideInner} onPress={handleFriendship}>
                            <Image
                                source={require('../../../assets/friendship-icon.png')}
                                style={[styles.topSideIcon, !isFriendshipScreen && { opacity: 0.5 }]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.topButtonOuter,
                            isDatesScreen ? styles.activeTopButtonOuter : styles.inactiveTopButtonOuter
                        ]}
                    >
                        <TouchableOpacity style={styles.topButtonCenterInner} onPress={handleDates}>
                            <Image
                                source={require('../../../assets/dates-icon.png')}
                                style={[styles.topCenterIcon, !isDatesScreen && { opacity: 0.5 }]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.topButtonOuter,
                            isRelationshipScreen ? styles.activeTopButtonOuter : styles.inactiveTopButtonOuter
                        ]}
                    >
                        <TouchableOpacity style={styles.topButtonSideInner} onPress={handleRelationship}>
                            <Image
                                source={require('../../../assets/relationship-icon.png')}
                                style={[styles.topSideIcon, !isRelationshipScreen && { opacity: 0.5 }]}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <Image style={[StyleSheet.absoluteFillObject, styles.image]} source={user.image} />

                <Animated.View style={[styles.swipeOverlay, { pointerEvents: 'none' }]}>
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: '#cdc0bf' }, leftOverlayStyle]} />
                    <Animated.View style={leftIconStyle}>
                        <Image source={require('../../../assets/x-icon-page.png')} style={styles.overlayIcon} />
                    </Animated.View>
                </Animated.View>

                <Animated.View style={[styles.swipeOverlay, { pointerEvents: 'none' }]}>
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: '#f3b8d9' }, rightOverlayStyle]} />
                    <Animated.View style={rightIconStyle}>
                        <Image source={require('../../../assets/check-icon-page.png')} style={styles.overlayIcon} />
                    </Animated.View>
                </Animated.View>

                <Animated.View style={[styles.swipeOverlay, superLikeContainerStyle, { pointerEvents: 'none' }]}>
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: '#f3b8d9' }, superLikeBackgroundStyle]} />
                    <Image
                        source={require('../../../assets/super-like-icon.png')}
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                            tintColor: '#fff'
                        }}
                    />
                </Animated.View>

                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={[StyleSheet.absoluteFillObject, styles.overlay]} />

                <View style={styles.footerContainer}>
                    <View style={styles.topContainer}>
                        <View style={styles.userInfo}>
                            <Text style={styles.name}>{user.name}, {user.age}</Text>
                            <Text style={styles.country}>{user.city}, {user.country}</Text>
                        </View>
                        <TouchableOpacity style={styles.extraButton} onPress={handleInformation}>
                            <Image source={require('../../../assets/exclamation-icon.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <FooterCard onNo={localHandleNo} onSuperLike={localHandleSuperLike} onYes={localHandleYes} />
                </View>
            </Animated.View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        width: CardWith,
        aspectRatio: 0.8 / 1.67,
        borderRadius: 60,
        overflow: 'hidden',
        elevation: 3,
        justifyContent: 'flex-end'
    },
    image: { borderRadius: 60 },
    overlay: {
        top: '50%',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60
    },
    footerContainer: { width: '100%', padding: 30 },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25
    },
    userInfo: { flexDirection: 'column' },
    name: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    country: { fontSize: 18, color: '#fff' },
    extraButton: { backgroundColor: '#ed7488', borderRadius: 60, padding: 5 },
    icon: { width: 24, height: 24, resizeMode: 'contain' },
    topButtonsContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 10,
        paddingHorizontal: 20
    },
    topButtonOuter: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    activeTopButtonOuter: { borderWidth: 2, borderColor: '#f4b4c7', opacity: 1 },
    inactiveTopButtonOuter: { borderWidth: 0, opacity: 0.6 },
    topButtonSideInner: {
        backgroundColor: '#ffffff',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    topButtonCenterInner: {
        backgroundColor: '#ffffff',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    topSideIcon: { width: 45, height: 45, resizeMode: 'contain' },
    topCenterIcon: { width: 35, height: 35, resizeMode: 'contain' },
    swipeOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    overlayIcon: { width: 80, height: 80, tintColor: '#fff', resizeMode: 'contain' }
});
