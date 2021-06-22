/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { AvatarGenerator } from 'random-avatar-generator';
import styles from './LeaderBoard.module.scss';
import Trophy from '../../../assets/images/trophy.png';
import SkeletonLeaderBoard from '../../UI/Skeletons/SkeletonLeaderboard';
import { fetchLeaderBoard } from '../../../Redux/actions/actionCreators/leaderboard'

function LeaderBoard() {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchLeaderBoard());
  }, []);
  const data = useSelector((state) => state.leaders.leaders);
  return (
    <>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard_img}>
          <img src={Trophy} alt="Leaderboard Trophy" />
        </div>
        {data.length > 1 && (
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
        {data.length === 0 && <SkeletonLeaderBoard />}
      </div>
    </>
  );
}

export default LeaderBoard;
