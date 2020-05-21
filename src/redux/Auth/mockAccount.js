export const listAccount = [
    {
        username: 'admin',
        password: '123456789'
    }
];

export const checkAuthorize = ({username, password}) => {
    const okAccount = listAccount.filter(
        singleAccount => singleAccount.username === username && singleAccount.password === password
    );
    return okAccount.length >= 1;
};