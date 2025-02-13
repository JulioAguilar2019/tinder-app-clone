import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HomeScreen } from '../screens/Home';
import { DrawerParamList } from './navigation.types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}
