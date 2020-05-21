import React from 'react';

const LoginInput = ({type, onChange, placeholder, iconName, value}) => {
    return (
        <div className="wrap-input100 validate-input"
             data-validate="Valid email is required: ex@abc.xyz">
            <input className="input100" type={type} name="email" placeholder={placeholder} onChange={onChange} value={value}/>
            <span className="focus-input100"/>
            <span className="symbol-input100">
                <i className={iconName} aria-hidden="true"/>
            </span>
        </div>
    )
}

export default LoginInput;