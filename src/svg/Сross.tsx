import React from 'react';

const Cross: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 413.348 413.348'
      width={size}
      height={size}
    >
      <path
        fill='rgb(20, 30, 55)'
        fillRule='evenodd'
        d='m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z'
      />
    </svg>
  );
};

export default Cross;
