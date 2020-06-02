import {notification} from "antd";

export const listAccount = [
    {
        username: 'admin',
        password: '123456789'
    },
    {
        username: 'newuser',
        password: '1234556789'
    }
];

export const checkAuthorize = ({username, password}) => {
    const okAccount = listAccount.filter(
        singleAccount => singleAccount.username === username && singleAccount.password === password
    );

    if (okAccount.length < 1) notification.error({message: 'Wrong username or password!'});

    return (okAccount.length >= 1);
};