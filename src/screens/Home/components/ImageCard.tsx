import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export const CardWith = Dimensions.get('window').width * 0.8

type ImageCard = {
    user: {
        id: number
        image: any,
        name: string
        age: number
        city: string
        country: string
    }
}

export const ImageCard = ({ user }: ImageCard) => {
    return (
        <View style={styles.card}>
            <Image style={[StyleSheet.absoluteFillObject, styles.image]} source={user.image} />
            <View style={styles.footer}>
                <Text style={styles.name}>{user.name}, {user.age}</Text>
                <Text style={styles.country}>{user.city}, {user.country}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: CardWith,
        aspectRatio: 0.8 / 1.67,
        justifyContent: 'flex-end',
        overflow: 'hidden',
        elevation: 3
    },
    image: {
        borderRadius: 60
    },
    footer: {
        padding: 30
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    country: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'medium'
    }
})