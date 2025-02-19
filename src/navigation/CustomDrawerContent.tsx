import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
    const insets = useSafeAreaInsets();

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={[
                styles.container,
                { paddingTop: insets.top + 10, paddingBottom: insets.bottom },
            ]}
        >
            <TouchableOpacity
                style={[styles.closeIconContainer, { top: insets.top + 10 }]}
                onPress={() => props.navigation.closeDrawer()}
            >
                <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>

            <View style={styles.header}>
                <Image
                    source={require('../assets/first-girl.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Andrea, 20</Text>
                <Text style={styles.location}>Surco</Text>
            </View>

            <View style={styles.menuContainer}>
                <DrawerItem
                    label="Lecafé"
                    onPress={() => console.log('Lecafé')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
                <DrawerItem
                    label="Mensajes"
                    onPress={() => console.log('Mensajes')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
                <DrawerItem
                    label="Matches"
                    onPress={() => console.log('Matches')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
                <DrawerItem
                    label="Mi Perfil"
                    onPress={() => console.log('Mi Perfil')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
                <DrawerItem
                    label="Tutorial"
                    onPress={() => console.log('Tutorial')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
                <DrawerItem
                    label="Ajustes"
                    onPress={() => console.log('Ajustes')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
            </View>

            <View style={styles.footer}>
                <DrawerItem
                    label="Cerrar sesión"
                    onPress={() => console.log('Cerrar sesión')}
                    icon={({ size }) => (
                        <Ionicons name="log-out-outline" size={size} color="#fff" />
                    )}
                    labelStyle={[styles.drawerItemLabel, { fontWeight: 'bold' }]}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4AECF',
    },
    closeIconContainer: {
        position: 'absolute',
        left: 15,
    },
    header: {
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    location: {
        fontSize: 14,
        color: '#fff',
    },
    menuContainer: {
        marginTop: 20,
    },
    footer: {
        marginTop: 20,
    },
    drawerItemLabel: {
        color: '#fff',
    },
});
