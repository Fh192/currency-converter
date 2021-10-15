import React from 'react';
import { useSelector } from 'react-redux';
import { currencyFullName } from '../../common/common';
import { RootState } from '../../store/store';
import { errors } from '../../types/apiTypes';
import styles from './Footer.module.css';
import Result from './Result/Result';

interface Props {
  countdown: number;
}

const Footer: React.FC<Props> = ({ countdown }) => {
  const { base, quote, error, lastUpdate } = useSelector(
    (s: RootState) => s.currency
  );

  const setLastCurrencyUpdate = (tm: number) => {
    const date = new Date(
      new Date(tm).getTime() + new Date(tm).getTimezoneOffset() * 60000
    );
    const month = date.toLocaleString('en', { month: 'short' });
    const day = date.toLocaleString('en', { day: '2-digit' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('ru', { timeStyle: 'short' });

    return `${currencyFullName[base]} to ${currencyFullName[quote]}
    conversion — Last updated ${month} ${day}, ${year}, ${time} UTC`;
  };

  return (
    <div className={styles.footer}>
      <Result />
      {error && (
        <div className={styles.error}>
          <span>{`${error}`}</span>
          {error === errors[2] && (
            <span className={styles.timer}>{countdown}</span>
          )}
        </div>
      )}
      {lastUpdate && (
        <div className={styles.lastUpdate}>
          <span>{setLastCurrencyUpdate(lastUpdate * 1000)}</span>
        </div>
      )}
    </div>
  );
};

export default Footer;
