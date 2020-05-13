import React from 'react';
import {WrapperProfileTag} from "./profileTag.style";
import {Card} from "antd";
import SlideShow from "./slideShow";

const ProfileTag = ({listImg, userName, bio}) => {

    return (
        <WrapperProfileTag>
            <Card>
                <SlideShow listImage={listImg} name={userName} bio={bio}/>
            </Card>
        </WrapperProfileTag>
    );
};

export default ProfileTag;