import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FriendshipScreen } from '../screens/Home';
import { DatesScreen } from '../screens/Home/DatesScreen';
import { RelationshipScreen } from '../screens/Home/RelationshipScreen';
import { MyDrawer } from './DrawerNavigator';
import { RootStackParamList } from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="MainDrawer" component={MyDrawer} />
            <RootStack.Screen
                options={{
                    animation: 'fade',
                }}
                name="Dates" component={DatesScreen} />

            <RootStack.Screen
                options={{
                    animation: 'fade',
                }}
                name="Friendship" component={FriendshipScreen} />

            <RootStack.Screen
                options={{
                    animation: 'fade',
                }}
                name="Relationship" component={RelationshipScreen} />

        </RootStack.Navigator>
    );
}
