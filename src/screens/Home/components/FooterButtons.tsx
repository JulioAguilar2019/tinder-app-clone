import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface FooterCardProps {
    onNo: () => void
    onSuperLike: () => void
    onYes: () => void
}

export const FooterCard: React.FC<FooterCardProps> = ({
    onNo,
    onSuperLike,
    onYes,
}) => {
    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#cdc0bf' }]}
                onPress={onNo}
            >
                <Image
                    source={require('../../../assets/x-icon.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#ffffff' }]}
                onPress={onSuperLike}
            >
                <Image
                    source={require('../../../assets/heart-icon.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#f3b8d9' }]}
                onPress={onYes}
            >
                <Image
                    source={require('../../../assets/check-icon.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
