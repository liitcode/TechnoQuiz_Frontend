/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Section from '../UI/TwoUpSection';
import VideoSection from '../UI/VideoSection';
import { sectionOne,sectionTwo,sectionThree,sectionFour,videoSectionOne} from './data';

function Home(){
    return(
        <>
        <VideoSection {...videoSectionOne} />
        <Section {...sectionOne}/>
        <Section {...sectionTwo}/>
        <Section {...sectionThree}/>
        <Section {...sectionFour}/>
        </>
    )
}

export default Home