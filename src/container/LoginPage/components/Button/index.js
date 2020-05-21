import React from 'react';

const LoginButton = ({children, ...rest}) => {
    return (
        <button className="login100-form-btn" {...rest}>
            {children}
        </button>
    )
};

export default LoginButton;
