import React from 'react';
import {WrapperProfileTag} from "./profileTag.style";
import {Card} from "antd";
import img from './example.webp';
import img1 from './example1.webp';
import img2 from './example2.webp';
import SlideShow from "./slideShow";

const listImg = [img, img1, img2];
const useName = 'Trang';
const bio = 'You dont know how many time I swipe left to find you'

const ProfileTag = ({}) => {
    return (
        <WrapperProfileTag>
            <Card>
                <SlideShow listImage={listImg} name={useName} bio={bio}/>
            </Card>
        </WrapperProfileTag>
    );
};

export default ProfileTag;