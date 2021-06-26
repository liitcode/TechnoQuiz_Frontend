
import React from 'react';
import Typewriter from 'typewriter-effect';
import './textsection.module.scss';

function TextSection({
  headline,
  lightBg,
  topLine,
  lightText,
  description,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={lightBg ? 'home__section' : 'home__section darkBg'}>
        <div className="container">
          <div
            className="row home__section-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="home__section-text-wrapper">
                <div className="heading">{headline}</div>
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading_dark'}>
                  <Typewriter
                    options={{
                      strings: description,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
            </div>
            <div className="col">
              <div className="home__section-img-wrapper">
                <img src={img} alt={alt} className="home__section-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextSection;
