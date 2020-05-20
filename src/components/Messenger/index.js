import React from 'react';
import {ChatBoxWrapper} from "./messenger.style";
import {ChatBox} from 'react-chatbox-component';
import ListFriend from "./components/ListFriend";

const Messenger = ({}) => {

    const listMessage = [
        {
            "text": "Hello there",
            "id": "1",
            "sender": {
                "name": "Ironman",
                "uid": "user1",
                "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
            },
        },
        {
            "text": "Hello there",
            "id": "1",
            "sender": {
                "name": "Ironman2",
                "uid": "user2",
                "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
            },
        }
    ];

    const user = {
        uid: 'user1'
    };

    return (
        <ChatBoxWrapper>
            <div className={'chatboxWrapper'}>
                <ChatBox messages={listMessage} user={user}/>
            </div>
            <div className={'listFriendWrapper'}>
                <ListFriend/>
            </div>
        </ChatBoxWrapper>
    )
};

export default Messenger;