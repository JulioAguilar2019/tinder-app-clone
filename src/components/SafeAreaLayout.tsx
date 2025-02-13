import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface LayoutProps {
    children: ReactNode;
}

export const SafeAreaLayout: FC<LayoutProps> = ({
    children,
}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 36, }}>
            {children}
        </View>
    );
};


