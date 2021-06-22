/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './shimer';
import './skeleton.scss';

const SkeletonCategories = () => {
  const n = 11;
 return(
     <>
       {[...Array(n)].map(()=>(
       <div className="skeleton-card">
       <SkeletonElement type="circle" >
       <Shimmer />
       </SkeletonElement>
       <SkeletonElement type="rectangle" > <Shimmer /></SkeletonElement>
       
       </div>
       ))}
     </>
 )

}

export default SkeletonCategories;
