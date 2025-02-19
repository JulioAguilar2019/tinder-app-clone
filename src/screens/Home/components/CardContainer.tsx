import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp, useDrawerStatus } from '@react-navigation/drawer';
import { SafeAreaLayout } from '../../../components/SafeAreaLayout';
import { IUser } from '../../../global/interfaces/user.interface';
import { DrawerParamList } from '../../../navigation/navigation.types';
import { CardProvider } from '../../hooks/CardContext';
import { ImageCard } from './ImageCard';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';

type HomeScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Friendship'>;

type CardContainerProps = {
    data: IUser[];
};

export const CardContainer = ({ data }: CardContainerProps): JSX.Element => {
    const navigation = useNavigation<HomeScreenDrawerProp>();
    const drawerStatus = useDrawerStatus();
    const [modalVisible, setModalVisible] = useState(false);

    const translateX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(translateX.value, { duration: 1000 }) }],
    }));


    const handleClose = () => {
        translateX.value = withTiming(500, { duration: 300 }, () => {
            runOnJS(navigation.closeDrawer)();
            translateX.value = 0;
        });
    };

    useEffect(() => {
        setModalVisible(drawerStatus === 'open');
    }, [drawerStatus]);

    const cardContent = (
        <Animated.View style={[styles.cardsContainer, animatedStyle]}>
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

                {!modalVisible && cardContent}

                <Modal visible={modalVisible}
                    transparent animationType="slide"
                    style={styles.modalFull}
                >
                    <View style={styles.modalFull}>
                        <View style={styles.leftSpace} />
                        <TouchableOpacity
                            style={styles.rightSide}
                            activeOpacity={1}
                            onPress={handleClose}
                        >
                            {cardContent}
                        </TouchableOpacity>
                    </View>
                </Modal>
            </SafeAreaLayout>
        </CardProvider>
    );
};

const drawerWidth = 280;

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
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
});
