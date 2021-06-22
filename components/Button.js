import React from 'react';
import clsx from 'clsx';

const Button = ({ children, ...props }) => (
  <button type={'submit'} className={`rounded-xl shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${props.bgColor} hover:bg-${props.bgColorHover} md:py-4 md:text-lg md:px-10`}>
    {children}
  </button>

);

export default Button;