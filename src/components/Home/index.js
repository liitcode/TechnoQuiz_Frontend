import React from 'react';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import styles from './Home.module.scss';
import landingPageQuiz from '../../assets/images/pngwing.com.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__left}>
          <h2>
            Test your technical skills with <span>Techno Quiz</span>
          </h2>
          <div className={styles.home__container__left__text}>
            <p>Take a quiz on</p>
            <Typewriter
              options={{
                strings: [
                  'JAVASCRIPT',
                  'HTML',
                  'DOCKER',
                  'PHP',
                  'KUBERNETES',
                  'MYSQL',
                  'WORDPRESS',
                  'LINUX',
                  'DEVOPS',
                  'BASH',
                  'LARAVEL',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <button type="button">Sign Up</button>
          <button type="button">Play as Guest</button>
        </div>
        <div className={styles.home__container__right}>
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
