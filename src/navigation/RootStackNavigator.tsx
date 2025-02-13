import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyDrawer } from './DrawerNavigator';
import { RootStackParamList } from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="MainDrawer" component={MyDrawer} />
        </RootStack.Navigator>
    );
}
