import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { FriendshipScreen } from '../screens/Home';
import { DrawerParamList } from './navigation.types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={FriendshipScreen} />
        </Drawer.Navigator>
    );
}
