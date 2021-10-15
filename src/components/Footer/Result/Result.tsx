import React from 'react';
import { useSelector } from 'react-redux';
import { currencyFullName, setCommasInNumber } from '../../../common/common';
import { RootState } from '../../../store/store';
import styles from './Result.module.css';

const Result: React.FC = () => {
  const { base, quote, amount, rate, change } = useSelector(
    (s: RootState) => s.currency
  );

  const fixedAmount = (+amount || 1).toFixed(2);

  const percentChangeStatus = change
    ? change[0] === '+'
      ? styles.higher
      : change[0] === '-'
      ? styles.lower
      : styles.neutral
    : '';

  return (
    <div className={styles.result}>
      <p className={styles.resultFrom}>
        <span>{setCommasInNumber(fixedAmount)}&nbsp;</span>
        <span>{currencyFullName[base]}&nbsp;</span>
        <span>=</span>
      </p>
      <p className={styles.resultTo}>
        <span>
          {rate
            ? setCommasInNumber((rate * +fixedAmount || 1).toFixed(2))
            : '0.00'}
          &nbsp;
        </span>
        <span>{`${currencyFullName[quote]}s`}&nbsp;</span>
        <sup className={`${styles.percentageChange} ${percentChangeStatus}`}>
          <span>{change}</span>
        </sup>
      </p>
    </div>
  );
};

export default Result;
