/* eslint-disable react/no-array-index-key */
import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './shimer';
import './skeleton.scss';

const SkeletonCategories = () => {
  const n = 11;
  return (
    <>
      {[...Array(n)].map((_, index) => (
        <div className="skeleton-card" key={index}>
          <SkeletonElement type="circle">
            <Shimmer />
          </SkeletonElement>
          <SkeletonElement type="rectangle">
            <Shimmer />
          </SkeletonElement>
        </div>
      ))}
    </>
  );
};

export default SkeletonCategories;
