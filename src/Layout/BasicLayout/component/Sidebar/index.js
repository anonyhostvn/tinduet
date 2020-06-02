import React from 'react';
import {Button, Menu, Space} from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAmericanSignLanguageInterpreting,
    faGlobe,
    faSignOutAlt,
    faSms,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import {history} from '../../../../redux/store';
import {requestLogout} from '../../../../redux/Auth/auth.ra';

const Sidebar = ({_requestLogout}) => {
    const logoDivStyle = {
        width: 256,
        backgroundColor: 'inherit',
        opacity: 0.4,
        height: 100,
        padding: 10,
        textAlign: 'center',
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '2px solid white'
    };

    return (
        <Menu theme={'dark'} style={{width: 256, height: '100vh'}}>

            <div style={logoDivStyle} onClick={() => history.push('/')}>
                <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} size={'5x'} color={'white'}/>
                <span style={{fontSize: 20}}> Tinduet </span>
            </div>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('/app/explore')}>
                <Space>
                    <FontAwesomeIcon icon={faGlobe} color={'white'}/> Explore
                </Space>
            </Menu.Item>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('/app/message')}>
                <Space>
                    <FontAwesomeIcon icon={faSms} color={'white'}/> Messages
                </Space>
            </Menu.Item>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('/app/profile')}>
                <Space>
                    <FontAwesomeIcon icon={faUserCircle} color={'white'}/> Profile
                </Space>
            </Menu.Item>

            <div style={{position: 'absolute', bottom: 20, width: 256}}>
                <Button block={true} style={{backgroundColor: 'inherit'}} type={'primary'} onClick={() => _requestLogout()}>
                    <Space>
                        Logout
                        <FontAwesomeIcon icon={faSignOutAlt} color={'white'}/>
                    </Space>
                </Button>
            </div>
        </Menu>
    )
};

export default connect(
    null,
    {
        _requestLogout: requestLogout
    }
)(Sidebar);