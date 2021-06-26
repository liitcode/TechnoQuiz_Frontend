
import React from 'react';
import styles from './Timer.module.scss';

// function to convert seconds into minutes and seconds format
function Timer({ secondsRemaining }) {
  const seconds = secondsRemaining % 60;
  const minutes = Math.floor(secondsRemaining / 60);

  return (
    <div
      className={secondsRemaining < 60 ? styles.timerRed : styles.timerGreen}
    >
      {minutes.toString().length === 1 ? `0${minutes}` : minutes}:
      {seconds.toString().length === 1 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
