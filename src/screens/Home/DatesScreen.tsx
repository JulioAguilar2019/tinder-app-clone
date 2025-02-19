import React from 'react';
import { ShapesBackground } from '../../components/ShapesBackground';
import { userDataDates } from '../../helpers/data';
import { ThemeProvider } from '../context/ThemeContext';
import { CardContainer } from './components/CardContainer';

export const DatesScreen = () => {
    return (
        <ThemeProvider primaryColor="#FFB03A" secondaryColor="#FF6B86">
            <ShapesBackground>
                <CardContainer data={userDataDates} />
            </ShapesBackground>
        </ThemeProvider>
    );
};
