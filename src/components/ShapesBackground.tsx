import React, { FC, ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface ShapesBackgroundProps {
    children: ReactNode;
    backgroundColor?: string;
}

export const ShapesBackground: FC<ShapesBackgroundProps> = ({
    children,
    backgroundColor = '#fff',
}) => {
    return (
        <ImageBackground
            source={require('../assets/fs-background.png')}
            style={[styles.background, { backgroundColor }]}
        >
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
