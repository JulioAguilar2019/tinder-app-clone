import React from 'react';
import { ShapesBackground } from '../../components/ShapesBackground';
import { userDataFriendship } from '../../helpers/data';
import { CardContainer } from './components/CardContainer';

export const FriendshipScreen = () => {

    return (
        <ShapesBackground
            backgroundColor='#9186e0'
        >
            <CardContainer
                data={userDataFriendship}
            />
        </ShapesBackground >
    );
};


