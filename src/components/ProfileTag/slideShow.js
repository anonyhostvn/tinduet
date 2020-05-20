import React from 'react';
import './slideShow.scss';

const SingleSlide = ({imgLink}) => {
    return (
        <div className="fs-slide" style={{backgroundImage: `url(${imgLink})`}}/>
    );
};

const SlideShow = ({listImage, name, bio}) => {
    return (
        <div className="slideshow-container">

            <div data-am-fadeshow="next-prev-navigation">

                {
                    listImage.map((s, index) => <input type={'radio'} name={'css-fadeshow'} id={`slide-${index}`}/>)
                }

                <div className="fs-slides">
                    {
                        listImage.map(imgLink => <SingleSlide imgLink={imgLink}/>)
                    }
                </div>

                <div className="fs-quick-nav">
                    {
                        listImage.map((s, index) => <label className={'fs-quick-btn'} htmlFor={`slide-${index}`}/>)
                    }
                </div>

                <div className="fs-prev-nav">
                    {
                        listImage.map((s, index) => <label className={'fs-prev-btn'} htmlFor={`slide-${index}`}/>)
                    }
                </div>

                <div className="fs-next-nav">
                    {
                        listImage.map((s, index) => <label className={'fs-next-btn'} htmlFor={`slide-${index}`}/>)
                    }
                </div>
            </div>

            <div className={'info-field'}>
                <b className={'info-field-name'}> {name} </b>
                <p style={{fontWeight: 100, marginTop: 0}}> {bio} </p>
            </div>
        </div>
    )
};

export default SlideShow;