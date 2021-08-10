import React, { useState } from 'react';
import { Currencies } from '../../common/common';
import SwapIcon from '../../svg/SwapIcon';
import styles from './Swap.module.css';

interface Props {
  from: Currencies;
  to: Currencies;

  setTo: React.Dispatch<React.SetStateAction<Currencies>>;
  setFrom: React.Dispatch<React.SetStateAction<Currencies>>;
}

const Swap: React.FC<Props> = ({ from, to, setFrom, setTo }) => {
  const [swapping, setSwapping] = useState(false);

  const onSwap = () => {
    setSwapping(true);

    const timer = setTimeout(() => {
      setSwapping(false);
      clearTimeout(timer);
    }, 0.2 * 1000);

    setTo(from);
    setFrom(to);
  };

  return (
    <div className={styles.swap} onClick={onSwap}>
      <button className={`${swapping && styles.swapAnimation}`}>
        <SwapIcon size='16px' />
      </button>
    </div>
  );
};

export default Swap;
