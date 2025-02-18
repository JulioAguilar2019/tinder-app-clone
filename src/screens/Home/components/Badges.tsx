import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface BadgesProps {
    items: string[]
    badgeColor?: string
}

export const Badges: React.FC<BadgesProps> = ({ items, badgeColor = '#EDEDED' }) => {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <View
                    key={index}
                    style={[styles.badge, { backgroundColor: badgeColor }]}
                >
                    <Text style={styles.badgeText}>{item}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    badgeText: {
        color: '#000',
        fontSize: 14,
    },
})
