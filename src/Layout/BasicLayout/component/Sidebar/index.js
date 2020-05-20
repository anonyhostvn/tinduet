import React from 'react';
import {Menu} from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faAmericanSignLanguageInterpreting} from '@fortawesome/free-solid-svg-icons';

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

            <div style={logoDivStyle}>
                <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} size={'5x'} color={'white'} />
                <span style={{fontSize: 20}}> Tinduet </span>
            </div>

            <Menu.Item style={{fontSize: 15}}>
                <FontAwesomeIcon icon={faGlobe} color={'white'}/> Explore
            </Menu.Item>

        </Menu>
    )
};

export default Sidebar;