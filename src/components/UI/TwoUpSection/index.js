/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import 'aos/dist/aos.css';
import './section.scss';

function Section({
    lightBg,topLine,lightText,lightTextDesc,headline,description,
    buttonLabel,img,alt,imgStart,setbtnLink,btnLink,click
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
                            {setbtnLink ?
                            <Link to={btnLink}>
                                <Button  buttonSize='btn--wide' buttonColor='yellow'>{buttonLabel}</Button>
                            </Link>   
                            : 
                            <Button  buttonSize='btn--wide' buttonColor='yellow' onclick={click}>{buttonLabel}</Button>
                            }
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__section-img-wrapper'>
                            <img src={img} alt={alt} className='home__section-img' data-aos = {imgStart === 'start' ? 'fade-right' : 'fade-left'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section;