import Ionicons from '@expo/vector-icons/Ionicons';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
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
                    source={require('../assets/profile-picture.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Andrea, 20</Text>
                <Text style={styles.location}>Surco</Text>
            </View>

            <View style={styles.menuContainer}>
                <DrawerItem
                    label="Lecafé"
                    onPress={() => { }}
                    icon={() => (
                        <Image
                            source={require('../assets/lecafe-icon.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                            }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    label="Mensajes"
                    onPress={() => console.log('Mensajes')}
                    icon={() => (
                        <Ionicons
                            name="chatbubbles-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    label="Matches"
                    onPress={() => console.log('Matches')}
                    icon={() => (
                        <Ionicons
                            name="heart-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    label="Mi Perfil"
                    onPress={() => console.log('Mi Perfil')}
                    icon={() => (
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    label="Tutorial"
                    onPress={() => console.log('Tutorial')}
                    icon={() => (
                        <Ionicons
                            name="book-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    label="Ajustes"
                    onPress={() => console.log('Ajustes')}
                    icon={() => (
                        <Ionicons
                            name="settings-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
                    )}
                    labelStyle={styles.drawerItemLabel}
                />
            </View>

            <View style={styles.footer}>
                <DrawerItem
                    label="Cerrar sesión"
                    onPress={() => console.log('Cerrar sesión')}
                    icon={() => (
                        <Ionicons
                            name="log-out-outline"
                            size={24}
                            color="#fff"
                            style={{ width: 24, height: 24 }}
                        />
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
        backgroundColor: '#FFB1C7',
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
        width: 100,
        height: 100,
        borderRadius: 60,
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
        fontWeight: 'bold',
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
