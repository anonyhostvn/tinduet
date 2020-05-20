import React from 'react';
import {Menu} from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faAmericanSignLanguageInterpreting, faSms, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import {history} from '../../../../redux/store';

const Sidebar = () => {
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
                <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} size={'5x'} color={'white'} />
                <span style={{fontSize: 20}}> Tinduet </span>
            </div>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('explore')}>
                <FontAwesomeIcon icon={faGlobe} color={'white'}/> Explore
            </Menu.Item>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('message')}>
                <FontAwesomeIcon icon={faSms} color={'white'}/> Messages
            </Menu.Item>

            <Menu.Item style={{fontSize: 15}} onClick={() => history.push('message')}>
                <FontAwesomeIcon icon={faUserCircle} color={'white'}/> Profile
            </Menu.Item>

        </Menu>
    )
};

export default connect()(Sidebar);