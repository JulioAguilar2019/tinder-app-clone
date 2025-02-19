import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BadgesProps {
    items: string[];
    color1: string;
    color2: string;
}

export const Badges: React.FC<BadgesProps> = ({ items, color1, color2 }) => {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <LinearGradient
                    key={index}
                    colors={[color1, color2]}
                    style={styles.badge}
                >
                    <Text style={styles.badgeText}>{item}</Text>
                </LinearGradient>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    badge: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 25,
        marginRight: 8,
        marginBottom: 8,
    },
    badgeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});
