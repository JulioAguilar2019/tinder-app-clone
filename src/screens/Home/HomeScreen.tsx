import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaLayout } from '../../components/SafeAreaLayout';
import { ShapesBackground } from '../../components/ShapesBackground';
import { HomeLayout } from './components/HomeLayout';
import { ImageCard } from './components/ImageCard';

const userData = {
    id: 1,
    image: require('../../assets/first-girl.png'),
    name: 'Sandra Gómez',
    age: 22,
    country: 'Perú',
    city: 'Surco',
}

export const HomeScreen = () => {
    return (
        <ShapesBackground
            backgroundColor='#9186e0'
        >
            <SafeAreaLayout>
                <HomeLayout>
                    <ImageCard user={userData} />
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
