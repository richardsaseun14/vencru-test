import classNames from 'classnames';
import React from 'react';

const Button = (props) => {
  const { onClick, children, type, variant, block, className } = props;
  const classes = classNames(
    ' font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-[46px] flex justify-center items-center',
    { 'bg-slate-50 text-slate-900 active:bg-slate-300': variant === 'filled' },
    {
      'text-slate-50 border border-slate-50 hover:bg-slate-50 hover:text-slate-900 active:bg-slate-300 active:text-slate-900':
        variant === 'outlined',
    },
    { 'w-full': block },
    className
  );
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
