import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/navigation.types';
import { Badges } from './components/Badges';
import { FooterCard } from './components/FooterButtons';

type InformationScreenProps = NativeStackScreenProps<RootStackParamList, 'Information'>;

export const InformationScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<InformationScreenProps['navigation']>();

    const { params } = useRoute<InformationScreenProps['route']>();
    const { user } = params;


    const handleNo = () => console.log('test')
    const handleYes = () => console.log('test')
    const handleSuperLike = () => console.log('test')

    const handleClose = () => {
        navigation.goBack()
    };
    const handleMenu = () => {
    };

    const handleFloatingButton = () => {
    };

    return (
        <View style={styles.root}>
            <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                <TouchableOpacity onPress={handleClose} style={styles.headerButton}>
                    <Image
                        source={require('../../assets/x-icon-black.png')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMenu} style={styles.headerButton}>
                    <Image
                        source={require('../../assets/dots-icon.png')}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.topImageContainer}>
                <Image
                    source={user.image}
                    style={[styles.userImage, StyleSheet.absoluteFillObject]}
                />
            </View>

            <View style={[styles.whiteContainer, { paddingBottom: insets.bottom }]}>
                <TouchableOpacity style={styles.floatingButton} onPress={handleFloatingButton}>
                    <Image
                        source={require('../../assets/heart-icon.png')}
                        style={styles.floatingIcon}
                    />
                </TouchableOpacity>

                <View style={styles.whiteContentContainer}>
                    <View style={styles.infoSection}>
                        <Text style={styles.title}>{user.name}, {user.age}</Text>
                        <Text style={styles.subtitle}>{user.city}, {user.country}</Text>

                        <Text style={styles.sectionTitle}>Intereses</Text>
                        <Badges items={user.interests} badgeColor="#f3b8d9" />
                    </View>

                    <FooterCard
                        onNo={handleNo}
                        onSuperLike={handleSuperLike}
                        onYes={handleYes}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    headerButton: {
        padding: 8
    },
    headerIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    },
    topImageContainer: {
        flex: 0.45
    },
    userImage: {
        width: '100%',
        height: '150%',
        resizeMode: 'cover'
    },

    whiteContainer: {
        flex: 0.55,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        overflow: 'hidden',
    },

    floatingButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ed7488',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    floatingIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        resizeMode: 'contain'
    },
    whiteContentContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    infoSection: {
        paddingHorizontal: 20,
        paddingTop: 60
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        marginTop: 4,
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8
    }
});
