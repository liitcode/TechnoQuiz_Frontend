/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Category.module.scss';
import Categories from './Categories';
import LeaderBoard from './LeaderBoard';
import ModeModal from '../UI/ModeModal';

function Category() {
  return (
    <div className={styles.categories}>
      <Categories />
      <LeaderBoard />
      <ModeModal status />
    </div>
  );
}

export default Category;
