/* eslint-disable react/jsx-props-no-spreading */
import React,{ useEffect } from 'react';
import Aos from 'aos';
import Section from '../UI/TwoUpSection';
import TextSection from '../UI/TextSection';
import { sectionOne,sectionTwo,sectionThree,textsection } from './data';

function Home(){
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[]);

    return(
        <>
        {/* <VideoSection {...videoSectionOne} /> */}
        <TextSection {...textsection}/>
        <Section {...sectionOne}/>
        <Section {...sectionTwo}/>
        <Section {...sectionThree}/>
        </>
    )
}

export default Home