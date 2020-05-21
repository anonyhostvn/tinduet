import React, {useState} from 'react';
import {LoginPageWrapper} from "./signup.style";
import leftSideImage from './images/img-01.png';
import LoginInput from "./components/Input";
import LoginButton from "./components/Button";
import {history} from "../../redux/store";
import {notification} from "antd";

const SignUpPage = () => {

    const [userInfo, setUserInfo] = useState({username: null, password: null, rePassword: null});

    const onChangeUserInfo = (key, value) => setUserInfo({...userInfo, [key]: value});

    const onSubmit = () => {
        if (userInfo.username && userInfo.password && userInfo.rePassword && userInfo.password === userInfo.rePassword) {
            notification.success({message: 'Sign up successfully'});
            history.push('/login');
        }
    };

    return (
        <LoginPageWrapper>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={leftSideImage} alt="IMG"/>
                            <div style={{fontFamily: 'Poppins-Bold', marginTop: 20, textAlign: 'center'}}> Tinduet </div>
                        </div>

                        <form className="login100-form validate-form" onClick={e => e.preventDefault()}>
                            <span className="login100-form-title">
                                Sign Up
                            </span>

                            <LoginInput type={'text'} onChange={e => onChangeUserInfo('username', e.target.value)} placeholder={'Username'} iconName={'fa fa-user'} value={userInfo.username} />

                            <LoginInput type={'password'} onChange={e => onChangeUserInfo('password', e.target.value)} placeholder={'Password'} iconName={'fa fa-unlock-alt'} value={userInfo.password}/>

                            <LoginInput type={'password'} onChange={e => onChangeUserInfo('rePassword', e.target.value)} placeholder={'Re-Password'} iconName={'fa fa-lock'}/>

                            <div className="container-login100-form-btn">
                                <LoginButton onClick={onSubmit}>
                                    Sign Up
                                </LoginButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </LoginPageWrapper>
    )
};

export default SignUpPage;