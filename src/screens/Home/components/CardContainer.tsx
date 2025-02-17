import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { SafeAreaLayout } from '../../../components/SafeAreaLayout';
import { IUser } from '../../../global/interfaces/user.interface';
import { DrawerParamList } from '../../../navigation/navigation.types';
import { ImageCard } from './ImageCard';
type HomeScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Home'>;

type CardContainerProps = {
    data: IUser[]
}

export const CardContainer = ({ data }: CardContainerProps) => {

    const navigation = useNavigation<HomeScreenDrawerProp>();
    const activeIndex = useSharedValue(0);

    return (
        <SafeAreaLayout>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                    source={require('../../../assets/menu-icon.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                {data.map((user, index) => {

                    return (
                        <ImageCard
                            key={user.id}
                            user={user}
                            numOfCards={data.length}
                            activeIndex={activeIndex}
                            index={index}
                        />
                    );
                })}
            </View>
        </SafeAreaLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
});