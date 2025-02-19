import { NavigationContainer } from '@react-navigation/native';
import React, { Suspense } from 'react';
import { RootNavigator } from './navigation/RootStackNavigator';
import { CardProvider } from './screens/context/CardContext';

export const Main = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={null}>
                <CardProvider>
                    <RootNavigator />
                </CardProvider>
            </Suspense>
        </NavigationContainer>
    );
};
