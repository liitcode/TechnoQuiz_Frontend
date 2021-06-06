import React from 'react';
import Particles from 'react-particles-js';
import styles from './Home.module.scss';
import landingPageQuiz from '../../assets/images/landingPageQuiz.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__top}>
          <h2>
            Test your technical skills with <span>Techno Quiz</span>
          </h2>
          <p>
            See where you land among other players in various topics like- Java,
            javascript, php, linux, docker, html, etc
          </p>
          <button type="button">Sign Up</button>
          <button type="button">Play as Guest</button>
        </div>
        <div className={styles.home__container__bottom}>
          <img src={landingPageQuiz} alt="Person taking technical quiz" />
        </div>
        <Particles
          className={styles.particle}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Home;
