import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { InformationScreen } from '../screens/Home/InformationScreen';
import { MainDrawer } from './DrawerNavigator';
import { RootStackParamList } from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): JSX.Element {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="MainDrawer" component={MainDrawer} />
            <RootStack.Screen
                name="Information"
                component={InformationScreen}
                options={{ animation: 'slide_from_bottom' }}
            />
        </RootStack.Navigator>
    );
}
