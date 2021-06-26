/* eslint-disable spaced-comment */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Dropdown.module.scss';

function Dropdown() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  useEffect(async () => {
    const result = await axios(
      'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/category',
    );
    setData(result.data);
  }, []);

  const optionSelected = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.selectBox}>
      <select
        className={styles.CategoryDropdown__select}
        onChange={optionSelected}
        value={value}
      >
        <option value="">All Categories</option>
        {Object.keys(data).map((item) => (
          <option key={item} value={`${data[item]}`}>
            {data[item]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
