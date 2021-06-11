/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '../Button';
import './videosection.css';

function VideoSection({
    headline,description,buttonLabel,vid
}){
    console.log("INSIDEE VIDEOO SECTIONNN");
    return (
        <>
        <div className='vid-container'>
           <video src={vid} autoPlay loop muted />
           <h1>{headline}</h1>
           <p>{description}</p>
            <Button buttonStyle='btn--outline--white' buttonSize='btn--large'>{buttonLabel}</Button>
        </div>
        </>
    )
}

export default VideoSection;