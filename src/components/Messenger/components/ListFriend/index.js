import React from 'react';
import {ListFriendWrapper} from "./listFriend.style";
import {Avatar, Badge, List} from "antd";

const mockListFriends = [
    {
        userName: 'ironman_1',
        avatar: 'https://data.cometchat.com/assets/images/avatars/ironman.png'
    },
    {
        userName: 'ironman_2',
        avatar: 'https://data.cometchat.com/assets/images/avatars/ironman.png'
    }
];

const ListFriend = () => {
    return (
        <ListFriendWrapper>
            <List
                dataSource={mockListFriends}
                renderItem={(item, index) => {
                    return (
                        <List.Item key={index} status={'success'}>
                            <List.Item.Meta
                                avatar={
                                    <Badge count={5}>
                                        <Avatar src={item.avatar}/>
                                    </Badge>
                                }
                                title={<a href="https://ant.design"> {item.userName} </a>}
                                description={'nothing to description'}
                            />
                        </List.Item>
                    )
                }}
            />
        </ListFriendWrapper>
    )
};

export default ListFriend;
