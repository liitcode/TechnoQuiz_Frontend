import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCategory } from '../../../Redux/actions/actionCreators/category';
import CategoryCard from './CategoryCard';
import styles from './Categories.module.scss';

function Categories() {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchCategory());
  }, []);
  const data = useSelector((state) => state.category.category)
  return (
    <div className={styles.categories}>
      <h2>Choose Category</h2>
      <div className={styles.categories__cards}>
        {data.map((item) => (
          <CategoryCard
            key={item.id}
            categoryName = {item.name}
            categoryId = {item.id}
            categoryIcon = {item.icon}
            categoryFact = {item.fact}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
