import { DrawerNavigationProp, useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaLayout } from '../../../components/SafeAreaLayout';
import { IUser } from '../../../global/interfaces/user.interface';
import { DrawerParamList } from '../../../navigation/navigation.types';
import { CardProvider } from '../../context/CardContext';
import { ImageCard } from './ImageCard';

type HomeScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Friendship'>;

type CardContainerProps = {
    data: IUser[];
};

const drawerWidth = 280;

export const CardContainer = ({ data }: CardContainerProps): JSX.Element => {
    const navigation = useNavigation<HomeScreenDrawerProp>();
    const drawerStatus = useDrawerStatus();
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);


    const toggleModalClose = () => {
        setModalVisible(false);
        navigation.closeDrawer();
    };

    useEffect(() => {
        setModalVisible(drawerStatus === 'open');
    }, [drawerStatus]);

    const cardContent = (
        <Animated.View style={styles.cardsContainer}>
            {data.map((user, index) => (
                <ImageCard key={user.id} user={user} numOfCards={data.length} index={index} />
            ))}
        </Animated.View>
    );

    return (
        <CardProvider>
            <SafeAreaLayout>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require('../../../assets/menu-icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>{cardContent}</View>

                <Modal visible={modalVisible} transparent animationType="slide">
                    <View style={styles.modalFull}>
                        <View style={styles.leftSpace} />
                        <TouchableOpacity
                            style={styles.rightSide}
                            activeOpacity={1}
                            onPress={toggleModalClose}
                        >
                            {cardContent}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.invisibleCloseButton, { top: insets.top + 10, left: 15 }]}
                            onPress={toggleModalClose}
                        />
                    </View>
                </Modal>
            </SafeAreaLayout>
        </CardProvider>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        margin: 10,
    },
    cardsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    modalFull: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    leftSpace: {
        width: drawerWidth + 150,
        backgroundColor: 'transparent',
    },
    rightSide: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    invisibleCloseButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 20,
        zIndex: 10000,
    },
});
