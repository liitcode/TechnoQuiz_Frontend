/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './shimer';
import './skeleton.scss';

const SkeletonLeaderBoard = () => {
    const n = 10;
    return (
        <div className='skeleton-wrapper'>
            <div className = 'skeleton-leaderboard'>
                <div className ='skeleton-leaders'>
                    {[...Array(n)].map(() => 
                    <>
                    <div className='skeleton-leader'>
                        <SkeletonElement type='avatar-small' />
                        <SkeletonElement type ='text'/>
                    <Shimmer/>
                    </div> 
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SkeletonLeaderBoard;
