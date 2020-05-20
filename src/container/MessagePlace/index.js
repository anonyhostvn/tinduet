import React from 'react';
import {MessagePlaceWrapper} from "./messagePlace.style";
import Messenger from "../../components/Messenger";

const MessagePlace = () => {
    return (
        <MessagePlaceWrapper>
            <Messenger/>
        </MessagePlaceWrapper>
    );
};

export default MessagePlace;