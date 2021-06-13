/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Category.module.scss';
import Categories from './Categories';
import LeaderBoard from './LeaderBoard';
import TypeSelectionModal from './TypeSelectionModal';

function Category() {
  return (
    <div className={styles.categories}>
      <Categories />
      <LeaderBoard />
      <TypeSelectionModal />
    </div>
  );
}

export default Category;
