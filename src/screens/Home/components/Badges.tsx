import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BadgesProps {
    items: string[];
    primaryColor: string;
    secondaryColor: string;
}

export const Badges: React.FC<BadgesProps> = ({ items, primaryColor, secondaryColor }) => {

    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <LinearGradient
                    key={index}
                    colors={[primaryColor, secondaryColor]}
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
