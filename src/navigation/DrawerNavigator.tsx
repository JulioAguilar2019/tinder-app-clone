import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Dimensions } from 'react-native';
import { DatesScreen } from '../screens/Home/DatesScreen';
import { FriendshipScreen } from '../screens/Home/FriendshipScreen';
import { RelationshipScreen } from '../screens/Home/RelationshipScreen';
import { CustomDrawerContent } from './CustomDrawerContent';
import { DrawerParamList } from './navigation.types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export function MainDrawer(): JSX.Element {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                overlayColor: '#FFB1C7',
                sceneStyle: { backgroundColor: '#FFB1C7' },
                drawerStyle: {
                    width: Dimensions.get('window').width * 0.5,
                    backgroundColor: '#FFB1C7',
                },
            }}
        >
            <Drawer.Screen name="Friendship" component={FriendshipScreen} />
            <Drawer.Screen name="Dates" component={DatesScreen} />
            <Drawer.Screen name="Relationship" component={RelationshipScreen} />
        </Drawer.Navigator>
    );
}
