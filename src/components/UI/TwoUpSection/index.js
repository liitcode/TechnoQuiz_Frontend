/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './section.scss';

function Section({
    lightBg,topLine,lightText,lightTextDesc,headline,description,
    buttonLabel,img,alt,imgStart
}){
    return (
        <>
        <div className={lightBg ? 'home__section' : 'home__section darkBg'}>
            <div className='container'>
                <div className='row home__section-row'
                style={{display:'flex',flexDirection: imgStart === 'start'? 'row-reverse':'row'}}>
                    <div className='col'>
                        <div className ='home__section-text-wrapper'>
                            <div className='top-line'>{topLine}</div>
                            <h1 className={lightText?'heading':'heading_dark'}>{headline}</h1>
                            <p className={lightTextDesc?'home__section-subtitle':'home__section-subtitle dark'}>
                                {description}
                            </p>
                            <Link to='/signup'>
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>   
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__section-img-wrapper'>
                            <img src={img} alt={alt} className='home__section-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section;