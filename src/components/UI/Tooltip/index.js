import React from 'react';
import Styles from './Tooltip.module.scss';

// eslint-disable-next-line react/prop-types
function Tooltip({ text, toolTipText }) {
  return (
    <div className={Styles.tooltip}>
      {text}
      <span className={Styles.tooltiptext}>
        <div style={{ width: '20%' }}>{toolTipText}</div>
      </span>
    </div>
  );
}

export default Tooltip;
