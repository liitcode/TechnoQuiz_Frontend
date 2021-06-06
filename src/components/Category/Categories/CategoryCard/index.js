import React from 'react';
import style from './CategoryCard.module.scss';

// eslint-disable-next-line react/prop-types
function CategoryCard({ cat }) {
  return <div className={style.categoryCard}>{cat}</div>;
}

export default CategoryCard;
