import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './Category.module.scss';
import Categories from './Categories';
import LeaderBoard from './LeaderBoard';
import TypeSelectionModal from './TypeSelectionModal';


function Category() {
  const user = useSelector((state) => state.auth.isLoggedin);
  if (!user) return <Redirect to="/signin" />;
  return (
    <div className={styles.categories}>
      <Categories />
      <LeaderBoard />
      <TypeSelectionModal />
    </div>
  );
}

export default Category;
