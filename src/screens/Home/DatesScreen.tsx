import React from 'react';
import { ShapesBackground } from '../../components/ShapesBackground';
import { userDataDates } from '../../helpers/data';
import { CardContainer } from './components/CardContainer';

export const DatesScreen = () => {

    return (
        <ShapesBackground
            backgroundColor='#f4b659'
        >
            <CardContainer
                data={userDataDates}
            />
        </ShapesBackground >
    );
};

