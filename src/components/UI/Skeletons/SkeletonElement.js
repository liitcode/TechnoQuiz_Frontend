/* eslint-disable react/prop-types */
import React from 'react';
import './skeleton.scss';

const SkeletonElement = ({ type,children }) => {
    const classes = `skeleton-${type}`;
    return (
        <div className={classes}>{children}</div>
    )
}

export default SkeletonElement; 