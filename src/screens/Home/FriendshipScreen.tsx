import React from 'react';
import { userDataFriendship } from '../../helpers/data';
import { CardContainer } from './components/CardContainer';
import { ShapesBackground } from '../../components/ShapesBackground';
import { ThemeProvider } from '../context/ThemeContext';

export const FriendshipScreen = () => {
    return (
        <ThemeProvider primaryColor="#7086E3" secondaryColor="#9072E5">
            <ShapesBackground>
                <CardContainer data={userDataFriendship} />
            </ShapesBackground>
        </ThemeProvider>
    );
};
