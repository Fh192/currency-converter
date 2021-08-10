import React from 'react';
import {
  Currencies,
  currencyFullName,
  setCommasInNumber,
} from '../../../common/common';
import styles from './Result.module.css';

interface Props {
  from: Currencies;
  to: Currencies;
  currencyRate: number;
  changeInPercentage: string;
  amount: string;
}

const Result: React.FC<Props> = ({
  from,
  to,
  amount,
  currencyRate,
  changeInPercentage,
}) => {
  const fixedAmount = (+amount).toFixed(2);

  return (
    <div className={styles.result}>
      <p className={styles.resultFrom}>
        <span>{+amount > 0 ? setCommasInNumber(fixedAmount) : 1}&nbsp;</span>
        <span>{currencyFullName[from]}&nbsp;</span>
        <span>=</span>
      </p>
      <p className={styles.resultTo}>
        <span>
          {+amount > 0
            ? setCommasInNumber((currencyRate * +fixedAmount).toFixed(2))
            : currencyRate.toFixed(2)}
          &nbsp;
        </span>
        <span>{`${currencyFullName[to]}s`}&nbsp;</span>
        <sup
          className={`${styles.percentageChange} ${
            +changeInPercentage.replace('%', '') > 0
              ? styles.higher
              : +changeInPercentage.replace('%', '') < 0
              ? styles.lower
              : styles.neutral
          }`}
        >
          {console.log()}
          <span>{changeInPercentage}</span>
        </sup>
      </p>
    </div>
  );
};

export default Result;
