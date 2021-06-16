/* eslint-disable react/prop-types */
import React from 'react';

function Timer({ secondsRemaining }) {
  const seconds = secondsRemaining % 60;
  const minutes = Math.floor(secondsRemaining / 60);

  return (
    <div>
      {minutes.toString().length === 1 ? `0${minutes}` : minutes}:
      {seconds.toString().length === 1 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
