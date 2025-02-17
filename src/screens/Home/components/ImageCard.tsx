import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, SharedValue, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { IUser } from '../../../global/interfaces/user.interface'
import { RootStackParamList } from '../../../navigation/navigation.types'

export const CardWith = Dimensions.get('window').width * 0.85
const screenWitdh = Dimensions.get('window').width

type ImageCard = {
    user: IUser
    numOfCards: number
    index: number
    activeIndex: SharedValue<number>
}

export const ImageCard = ({ user, numOfCards, activeIndex, index }: ImageCard) => {
    const translationX = useSharedValue(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const animatedCard = useAnimatedStyle(() => ({
        opacity: interpolate(activeIndex.value, [index - 1, index, index + 1], [1 - 1 / 5, 1, 1]),
        transform: [
            {
                scale: interpolate(activeIndex.value, [index - 1, index, index + 1], [0.95, 1, 1])
            },
            {
                translateY: interpolate(activeIndex.value, [index - 1, index, index + 1], [-30, 0, 0])
            },
            {
                translateX: translationX.value
            },
            {
                rotateZ: `${interpolate(
                    translationX.value,
                    [-screenWitdh, 0, screenWitdh],
                    [-15, 0, 15]
                )}deg`
            }
        ]
    }))

    const gesture = Gesture.Pan()
        .onChange((event) => {
            translationX.value = event.translationX;
        })
        .onEnd((event) => {
            if (Math.abs(event.velocityX) > 400) {
                translationX.value = withSpring(
                    Math.sign(event.velocityX) * 500,
                    {
                        velocity: event.velocityX
                    },
                )
                activeIndex.value = withSpring(activeIndex.value + 1)
            } else {
                translationX.value = withSpring(0)
            }
        });

    const handleNo = () => console.log('No')
    const handleSuperLike = () => console.log('Super Like')
    const handleYes = () => console.log('Sí')
    const handleInformation = () => console.log('Sí')
    const handleDates = () => {
        navigation.navigate('Dates')
    }

    const handleFriendship = () => {
        navigation.navigate('Friendship')
    }

    const handleRelationship = () => {
        navigation.navigate('Relationship')
    }

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
                    <View style={styles.topButtonOuter}>
                        <TouchableOpacity
                            style={styles.topButtonSideInner}
                            onPress={handleFriendship}
                        >
                            <Image
                                source={require('../../../assets/friendship-icon.png')}
                                style={styles.topSideIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topButtonOuter}>
                        <TouchableOpacity
                            style={styles.topButtonCenterInner}
                            onPress={handleDates}
                        >
                            <Image
                                source={require('../../../assets/dates-icon.png')}
                                style={styles.topCenterIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topButtonOuter}>
                        <TouchableOpacity
                            style={styles.topButtonSideInner}
                            onPress={handleRelationship}
                        >
                            <Image
                                source={require('../../../assets/relationship-icon.png')}
                                style={styles.topSideIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <Image style={[StyleSheet.absoluteFillObject, styles.image]} source={user.image} />

                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={[StyleSheet.absoluteFillObject, styles.overlay]}
                />

                <View style={styles.footerContainer}>
                    <View style={styles.topContainer}>
                        <View style={styles.userInfo}>
                            <Text style={styles.name}>{user.name}, {user.age}</Text>
                            <Text style={styles.country}>{user.city}, {user.country}</Text>
                        </View>

                        <TouchableOpacity style={styles.extraButton} onPress={handleInformation}>
                            <Image
                                source={require('../../../assets/exclamation-icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#cdc0bf' }]}
                            onPress={handleNo}
                        >
                            <Image
                                source={require('../../../assets/x-icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#ffffff' }]}
                            onPress={handleSuperLike}
                        >
                            <Image
                                source={require('../../../assets/heart-icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: '#f3b8d9' }]}
                            onPress={handleYes}
                        >
                            <Image
                                source={require('../../../assets/check-icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        width: CardWith,
        aspectRatio: 0.8 / 1.67,
        borderRadius: 60,
        overflow: 'hidden',
        elevation: 3,
        justifyContent: 'flex-end',
    },
    image: {
        borderRadius: 60
    },
    overlay: {
        top: '50%',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60
    },
    footerContainer: {
        width: '100%',
        padding: 30,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    userInfo: {
        flexDirection: 'column',
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    country: {
        fontSize: 18,
        color: '#fff',
    },
    extraButton: {
        backgroundColor: '#ed7488',
        borderRadius: 60,
        padding: 5
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    topButtonsContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 10,
        paddingHorizontal: 20,
    },
    // Contenedor EXTERNO que dibuja el borde
    topButtonOuter: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        borderWidth: 2,
        borderColor: '#f4b4c7', // color del borde
        justifyContent: 'center',
        alignItems: 'center',
        // un background transparent para ver el borde real
        backgroundColor: 'transparent',
    },
    // Contenedor INTERNO para el círculo blanco real
    topButtonSideInner: {
        backgroundColor: '#ffffff',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'flex-end', // pegado abajo
        overflow: 'hidden',
    },
    topButtonCenterInner: {
        backgroundColor: '#ffffff',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center', // centrado
        overflow: 'hidden',
    },
    topSideIcon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    topCenterIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
})
