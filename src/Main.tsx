import { NavigationContainer } from '@react-navigation/native';
import React, { Suspense } from 'react';
import { RootNavigator } from './navigation/RootStackNavigator';

export const Main = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={null}>
                <RootNavigator />
            </Suspense>
        </NavigationContainer>
    );
};
