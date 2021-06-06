/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import styles from './Categories.module.scss';

function Categories() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios(
      'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/category',
    );
    setData(result.data);
  }, []);

  return (
    <div className={styles.categories}>
      <h2>Choose Category</h2>
      <div className={styles.categories__cards}>
        {Object.keys(data).map((item) => (
          <CategoryCard key={item} cat={data[item]} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
