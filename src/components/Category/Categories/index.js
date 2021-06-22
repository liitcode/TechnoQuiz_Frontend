/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../Redux/actions/actionCreators/category';
import CategoryCard from './CategoryCard';
import styles from './Categories.module.scss';
import SkeletonCategories from '../../UI/Skeletons/SkeletonCategories';

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  const data = useSelector((state) => state.category.category);
  return (
    <div className={styles.categories}>
      <h2>Choose Category</h2>
      <div className={styles.categories__cards}>
        {data.length>0  &&
          data.map((item) => (
            <CategoryCard
              key={item.id}
              categoryName={item.name}
              categoryId={item.id}
              categoryIcon={item.icon}
            />
          ))}
        {data.length===0 && <SkeletonCategories />}
      </div>
    </div>
  );
}

export default Categories;
