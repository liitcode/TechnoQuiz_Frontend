/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AvatarGenerator } from 'random-avatar-generator';
import styles from './LeaderBoard.module.scss';
// import Dropdown from '../../UI/Dropdown';
import Trophy from '../../../assets/images/trophy.png';
import SkeletonLeaderBoard from '../../UI/Skeletons/SkeletonLeaderboard';
// import SkeletonElement from '../../UI/Skeletons/SkeletonElement';

function LeaderBoard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const result = await axios(
        'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/leaderboard',
      );
      setData(result.data);
    }, 4000);
  }, []);

  return (
    <>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard_img}>
          <img src={Trophy} alt="Leaderboard Trophy" />
        </div>
        {data && (
          <div className={styles.leaders}>
            {/* <Dropdown /> */}
            {/* <div className={styles.message}>
              *Choose Category to see leaders of respective category
            </div> */}
            {data.map((leader, index) => (
              <div className={styles.leader}>
                <div className={styles.leader__name__container}>
                  <div className={styles.leader__index}>{index + 1}</div>
                  <div className={styles.leader__img}>
                    <img
                      className={styles.leader_img}
                      src={new AvatarGenerator().generateRandomAvatar()}
                      alt="leaders"
                    />
                  </div>
                  <div className={styles.leader__name}>{leader.name}</div>
                </div>
                <div className={styles.leader__score}>{leader.score}</div>
              </div>
            ))}
          </div>
        )}
        {!data && <SkeletonLeaderBoard />}
      </div>
    </>
  );
}

export default LeaderBoard;
