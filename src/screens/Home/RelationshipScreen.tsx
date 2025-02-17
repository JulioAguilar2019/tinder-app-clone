import React from 'react';
import { ShapesBackground } from '../../components/ShapesBackground';
import { userDataRelationship } from '../../helpers/data';
import { CardContainer } from './components/CardContainer';

export const RelationshipScreen = () => {

    return (
        <ShapesBackground
            backgroundColor='#ee8294'
        >
            <CardContainer
                data={userDataRelationship}
            />
        </ShapesBackground >
    );
};


