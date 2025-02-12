import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaLayout } from '../../components/SafeAreaLayout';
import { ShapesBackground } from '../../components/ShapesBackground';

export const HomeScreen = () => {
    return (
        <ShapesBackground
            backgroundColor='#9186e0'
        >
            <SafeAreaLayout>
                <View>
                    <Text style={styles.text}>Contenido sobre el fondo</Text>
                </View>
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
