import React, {useState} from 'react';
import {LoginPageWrapper} from "./loginPage.style";
import leftSideImage from './images/img-01.png';
import LoginInput from "./components/Input";
import LoginButton from "./components/Button";
import {history} from "../../redux/store";
import {connect} from "react-redux";
import {requestLogin} from '../../redux/Auth/auth.ra';
import {Redirect} from "react-router";

const LoginPage = ({_requestLogin, isLogin}) => {

    const [userInfo, setUserInfo] = useState({username: null, password: null});

    const onChangeUserInfo = (key, value) => setUserInfo({...userInfo, [key]: value});

    if (isLogin) return <Redirect to={'/app'}/>

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
                                Member Login
                            </span>

                            <LoginInput type={'text'} onChange={e => onChangeUserInfo('username', e.target.value)} placeholder={'Username'} iconName={'fa fa-user'} value={userInfo.username}/>

                            <LoginInput type={'password'} onChange={e => onChangeUserInfo('password', e.target.value)} placeholder={'Password'} iconName={'fa fa-unlock-alt'} value={userInfo.password}/>

                            <div className="container-login100-form-btn">
                                <LoginButton onClick={() => _requestLogin({username: userInfo.username, password: userInfo.password})}>
                                    Login
                                </LoginButton>
                            </div>

                            <div className="text-center p-t-12">
                                {/*<span className="txt1">*/}
                                {/*    Forgot*/}
                                {/*</span> {' '}*/}
                                {/*<a className="txt2">*/}
                                {/*    Username / Password?*/}
                                {/*</a>*/}
                            </div>

                            <div className="text-center p-t-136">
                                <button className="txt2" onClick={() => history.push('/signup')}>
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </LoginPageWrapper>
    )
};

const mapStateToProps = (state) => ({
    isLogin: state.Auth.isLogin
});

export default connect(
    mapStateToProps,
    {
        _requestLogin: requestLogin
    }
)(LoginPage);