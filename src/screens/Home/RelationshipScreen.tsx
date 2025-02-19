import React from 'react';
import { ShapesBackground } from '../../components/ShapesBackground';
import { userDataRelationship } from '../../helpers/data';
import { ThemeProvider } from '../context/ThemeContext';
import { CardContainer } from './components/CardContainer';

export const RelationshipScreen = () => {
    return (
        <ThemeProvider primaryColor="#FF58A4" secondaryColor="#FF6B86">
            <ShapesBackground>
                <CardContainer data={userDataRelationship} />
            </ShapesBackground>
        </ThemeProvider>
    );
};
