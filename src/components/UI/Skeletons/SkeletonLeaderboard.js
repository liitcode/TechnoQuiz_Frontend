import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './shimer';
import './skeleton.scss';

const SkeletonLeaderBoard = () => {
  const n = 10;
  return (
    <div className="skeleton-leaders">
      {[...Array(n)].map((_, index) => (
        <div className="skeleton-leader" key={index}>
          <SkeletonElement type="avatar-small"><Shimmer /></SkeletonElement>
          <SkeletonElement type="text" ><Shimmer /></SkeletonElement>
        </div>
      ))}
    </div>

  );
};

export default SkeletonLeaderBoard;
