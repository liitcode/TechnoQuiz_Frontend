/* eslint-disable react/prop-types */
import React from 'react';
import './skeleton.scss';

const SkeletonElement = ({ type }) => {
    const classes = `skeleton-${type}`;
    return (
        <div className={classes}/>
    )
}

export default SkeletonElement; 