import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/navigation.types';
import { Badges } from './components/Badges';
import { FooterCard } from './components/FooterButtons';

type InformationScreenProps = NativeStackScreenProps<RootStackParamList, 'Information'>;

export const InformationScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const { params } = useRoute<InformationScreenProps['route']>();
    const { user } = params;
    const { source } = params;

    const [isCollapsed, setIsCollapsed] = useState(false);

    const animationValue = useSharedValue(0);

    const collapsedOffset = 250;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleToggleInfo = () => {
        setIsCollapsed(!isCollapsed);
        animationValue.value = withTiming(isCollapsed ? 0 : 1, { duration: 300 });
    };

    const animatedWhiteContainerStyle = useAnimatedStyle(() => {
        const translateY = interpolate(animationValue.value, [0, 1], [0, collapsedOffset]);
        return {
            transform: [{ translateY }],
        };
    });

    const animatedFloatingButtonStyle = useAnimatedStyle(() => {
        const translateY = interpolate(animationValue.value, [0, 1], [0, collapsedOffset]);
        return {
            transform: [{ translateY }],
        };
    });

    const animatedCarouselStyle = useAnimatedStyle(() => {
        const translateY = interpolate(animationValue.value, [0, 1], [0, collapsedOffset]);
        return {
            transform: [{ translateY }],
        };
    });

    const floatingIconSource = isCollapsed
        ? require('../../assets/arrow-up-icon.png')
        : require('../../assets/arrow-down-icon.png');

    let primaryColor = '#000';
    let secondaryColor = '#000';

    switch (source) {
        case 'Friendship':
            primaryColor = '#7086E3';
            secondaryColor = '#9072E5';
            break;
        case 'Dates':
            primaryColor = '#FFB03A';
            secondaryColor = '#FF6B86';
            break;
        case 'Relationship':
            primaryColor = '#FF58A4';
            secondaryColor = '#FF6B86';
            break;
        default:
            primaryColor = '#9072E5';
            secondaryColor = '#9072E5';
    }

    return (
        <View style={styles.root}>
            <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                <TouchableOpacity onPress={handleGoBack} style={styles.headerButton}>
                    <Image
                        source={require('../../assets/x-icon-black.png')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.headerButton}>
                    <Image
                        source={require('../../assets/dots-icon.png')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.topImageContainer}>
                <Image
                    source={user.image}
                    style={styles.userImage}
                />

                <Animated.View style={[styles.carouselContainer, animatedCarouselStyle]}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </Animated.View>
            </View>

            <Animated.View style={[styles.floatingButton, animatedFloatingButtonStyle]}>
                <TouchableOpacity onPress={handleToggleInfo}>
                    <Image source={floatingIconSource} style={styles.floatingIcon} />
                </TouchableOpacity>
            </Animated.View>

            <Animated.View
                style={[
                    styles.whiteContainer,
                    { paddingBottom: insets.bottom },
                    animatedWhiteContainerStyle,
                ]}
            >
                <View style={styles.whiteContentContainer}>
                    <View style={styles.infoSection}>
                        <Text style={styles.title}>{user.name}, {user.age}</Text>
                        <Text style={styles.subtitle}>{user.city}, {user.country}</Text>

                        {!isCollapsed && (
                            <>
                                <Text style={styles.sectionTitle}>Intereses</Text>
                                <Badges items={user.interests} primaryColor={primaryColor} secondaryColor={secondaryColor} />
                                {user.genderIdentity.length > 0 && (
                                    <>
                                        <Text style={styles.sectionTitle}>Me considero</Text>
                                        <Badges items={user.genderIdentity} primaryColor={primaryColor} secondaryColor={secondaryColor} />
                                    </>
                                )}
                            </>
                        )}
                    </View>

                    {!isCollapsed && (
                        <FooterCard
                            onNo={handleGoBack}
                            onSuperLike={handleGoBack}
                            onYes={handleGoBack}
                        />
                    )}
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerButton: {
        padding: 8,
    },
    headerIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    topImageContainer: {
        flex: 1,
        position: 'relative',
    },
    userImage: {
        width: '100%',
        height: '160%',
        resizeMode: 'cover',
    },
    // Puntos del carrusel
    carouselContainer: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
    },
    floatingButton: {
        position: 'absolute',
        top: '42%',
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ed7488',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    floatingIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        resizeMode: 'contain',
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        marginTop: -30,
        zIndex: 1,
        padding: 30,
    },
    whiteContentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    infoSection: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        marginTop: 4,
        marginBottom: 16,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        marginTop: 10,
    },
});
