import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBase, setQuote } from '../../store/actions/currencyActions';
import { RootState } from '../../store/store';
import SwapIcon from '../../svg/SwapIcon';
import styles from './Swap.module.css';

interface Props {
  disableRequests: boolean;
}

const Swap: React.FC<Props> = ({ disableRequests }) => {
  const dispatch = useDispatch();

  const [swapping, setSwapping] = useState(false);
  const { base, quote } = useSelector((s: RootState) => s.currency);

  const onSwap = () => {
    if (!disableRequests) {
      setSwapping(true);

      dispatch(setBase(quote));
      dispatch(setQuote(base));
    }
  };

  return (
    <div
      className={styles.swap}
      onClick={onSwap}
      onAnimationEnd={() => setSwapping(false)}
    >
      <button className={`${swapping ? styles.swapAnimation : ''}`}>
        <SwapIcon size='16px' />
      </button>
    </div>
  );
};

export default Swap;
