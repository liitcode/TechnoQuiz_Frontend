/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Section from '../UI/TwoUpSection';
import TextSection from '../UI/TextSection';

import { sectionOne,sectionTwo,sectionThree,sectionFour,textsection } from './data';

function Home(){
    return(
        <>
        {/* <VideoSection {...videoSectionOne} /> */}
        <TextSection {...textsection}/>
        <Section {...sectionOne}/>
        <Section {...sectionTwo}/>
        <Section {...sectionThree}/>
        <Section {...sectionFour}/>
        </>
    )
}

export default Home