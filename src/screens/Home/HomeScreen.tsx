import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaLayout } from '../../components/SafeAreaLayout';
import { ShapesBackground } from '../../components/ShapesBackground';
import { HomeLayout } from './components/HomeLayout';
import { ImageCard } from './components/ImageCard';

const userData =
    [
        {
            id: 1,
            image: require('../../assets/first-girl.png'),
            name: 'Sandra Gómez',
            age: 21,
            country: 'Perú',
            city: 'Surco',
        },
        {
            id: 2,
            image: require('../../assets/second-girl.png'),
            name: 'Beatriz',
            age: 22,
            country: 'Perú',
            city: 'Lima',
        },
        {
            id: 3,
            image: require('../../assets/third-girl.png'),
            name: 'Alondra',
            age: 27,
            country: 'Perú',
            city: 'San Isidro',
        }
    ]


export const HomeScreen = () => {
    return (
        <ShapesBackground
            backgroundColor='#9186e0'
        >
            <SafeAreaLayout>
                <HomeLayout>
                    <ImageCard user={userData[1]} />
                </HomeLayout>
            </SafeAreaLayout>
        </ShapesBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
    },
});
