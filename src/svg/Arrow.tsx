import React from 'react';

const Arrow: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 16 10'
      width={size}
      height={size}
    >
      <path
        fill='rgb(20, 30, 55)'
        fillRule='evenodd'
        d='M8 9.5L.5 2 1.55.95 8 7.4 14.45.95 15.5 2 8 9.5z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default Arrow;
