/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './LeaderBoard.module.scss';
import Dropdown from '../../UI/Dropdown/index';
import Trophy from '../../../assets/images/trophy.png';

function LeaderBoard() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(
      'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/leaderboard',
    );
    setData(result.data);
  }, []);
  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboard_img}>
        <img src={Trophy} alt="Leaderboard Trophy" />
      </div>
      <Dropdown />
      <div className={styles.message}>
        *Choose Category to see leaders of respective category
      </div>
      <div className={styles.leaders}>
        {data.map((leader, index) => (
          <div className={styles.leader}>
            <div className={styles.leader__index}>{index + 1}</div>
            <div className={styles.leader__name}>{leader.name}</div>
            <div className={styles.leader__score}>{leader.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
