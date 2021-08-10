import React from 'react';
import {
  Currencies,
  currencyFullName,
  errorMessage,
} from '../../common/common';
import styles from './Footer.module.css';
import Result from './Result/Result';

interface Props {
  from: Currencies;
  to: Currencies;
  currencyRate: number;
  changeInPercentage: string;
  amount: string;
  lastUpdate: string;
  error: string;
  countdown: number;
}

const Footer: React.FC<Props> = ({
  countdown,
  from,
  to,
  error,
  lastUpdate,
  ...props
}) => {
  return (
    <div className={styles.footer}>
      <Result
        from={from}
        to={to}
        amount={props.amount}
        currencyRate={props.currencyRate}
        changeInPercentage={props.changeInPercentage}
      />
      {error.length > 0 && (
        <div className={styles.error}>
          <span>{`${error}`}</span>
          {error === errorMessage + ' (API restriction)' && (
            <span className={styles.timer}>{countdown}</span>
          )}
        </div>
      )}
      {lastUpdate && (
        <div className={styles.lastUpdate}>
          <span>
            <span>{currencyFullName[from]}</span>
            {' to '}
            <span>{currencyFullName[to]}</span>
            {' conversion '}
            {' — '}
            <span>{`Last updated ${lastUpdate}`}</span>
            {' UTC '}
          </span>
        </div>
      )}
    </div>
  );
};

export default Footer;
