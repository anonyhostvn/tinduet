import React, {useEffect, useState} from 'react';
import {ChatBoxWrapper} from "./messenger.style";
import {ChatBox} from 'react-chatbox-component';
import ListFriend from "./components/ListFriend";
import Axios from 'axios';
import {connect} from "react-redux";

const url = 'http://localhost:3000';

const Messenger = ({uid}) => {

    const [fetchedMessage, setFetchMessage] = useState([]);

    const refreshMessage = () => {
        Axios.get(`${url}/message`).then(data => setFetchMessage(data.data)).catch(err => console.log(err));
    }

    useEffect(() => {
        refreshMessage();
    }, []);

    const sendMessage = (message) => {
        Axios.post(`${url}/message`, {
            text: message,
            uid
        }).then(data => refreshMessage());
    }

    const user = {
        uid
    }

    return (
        <ChatBoxWrapper>
            <div className={'chatboxWrapper'}>
                <ChatBox messages={fetchedMessage} user={user} onSubmit={data => sendMessage(data)}/>
            </div>
            <div className={'listFriendWrapper'}>
                <ListFriend/>
            </div>
        </ChatBoxWrapper>
    )
};

const mapStateToProps = state => ({
    uid: state.Auth.uid
})

export default connect(
    mapStateToProps,
    {}
)(Messenger);