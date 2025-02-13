import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerParamList } from '../../../navigation/navigation.types';

type HomeScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Home'>;
interface LayoutProps {
    children: ReactNode;
}

export function HomeLayout({ children }: LayoutProps) {
    const navigation = useNavigation<HomeScreenDrawerProp>();
    const insets = useSafeAreaInsets();

    return (
        <View>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require('../../../assets/menu-icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {children}
        </View>
    );
}

const styles = StyleSheet.create({

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
    },
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
});
