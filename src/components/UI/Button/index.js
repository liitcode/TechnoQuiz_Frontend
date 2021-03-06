
import React from 'react';
import './button.scss';

const STYLES = [
  'btn--primary',
  'btn--outline',
  'btn--outline--white',
  'btn--modal',
  'btn--premium',
  'btn--quiz',
  'btn--circular',
  'btn--switch',
  'btn--switch-red',
  "btn--disabled"
];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'secondary', 'red', 'blue', 'yellow', 'green'];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
  buttonColor,
  isdisabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onclick}
      type={type}
      disabled={isdisabled}
    >
      {children}
    </button>
  );
};
