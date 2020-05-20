import React, {useEffect, useState} from 'react';
import ProfileTag from "../../components/ProfileTag";
import img from "../../mockData/example.webp";
import img1 from "../../mockData/example1.webp";
import img2 from "../../mockData/example2.webp";
import img3 from '../../mockData/girl_2_a.webp';
import img4 from '../../mockData/girl_2_b.webp';
import img5 from '../../mockData/girl_2_c.webp';
import bgImg from '../../media/1603.jpg';
import {MatchingPlaceWrapper} from "./matchingPlace.style";


const listInfo = [
    {
        listImg: [img, img1, img2],
        userName: 'Trang',
        bio: 'You dont know how many time I swipe left to find you'
    },
    {
        listImg: [img3, img4, img5],
        userName: 'Ngọc',
        bio: 'Có ai bắn pubg không ạ ?'
    }
];
const MatchingPlace = () => {
    const [index, setIndex] = useState(0);
    const {listImg, userName, bio} = listInfo[index];

    const likeAction = () => {
        setIndex((index + 1) % listInfo.length);
    };

    const dislikeAction = () => {
        setIndex((index + 1) % listInfo.length);
    };

    const handleKeyPress = e => {
        switch (e.key) {
            case 'ArrowLeft':
                dislikeAction();
                break;
            case 'ArrowRight':
                likeAction();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
    });

    return (
        <MatchingPlaceWrapper className={'wrapper'} onKeyDown={handleKeyPress}>
            <ProfileTag {...{listImg, userName, bio, dislikeAction, likeAction}}/>
        </MatchingPlaceWrapper>
    )
};

export default MatchingPlace;
