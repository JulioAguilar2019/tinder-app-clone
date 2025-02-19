import React, { FC, ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../screens/context/ThemeContext';

interface ShapesBackgroundProps {
    children: ReactNode;
}

export const ShapesBackground: FC<ShapesBackgroundProps> = ({ children }) => {
    const { primaryColor, secondaryColor } = useTheme();

    return (
        <ImageBackground
            source={require('../assets/fs-background.png')}
            style={styles.background}
        >
            <LinearGradient
                colors={[primaryColor, secondaryColor]}
                style={styles.gradient}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                {children}
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});
