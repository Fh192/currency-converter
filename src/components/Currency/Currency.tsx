import React from 'react';
import { Currencies, currencyFullName } from '../../common/common';
import styles from './Currency.module.css';

interface Props {
  currency: Currencies;
  countryCode: string;
  selectMode: boolean;
  setCurrency: React.Dispatch<React.SetStateAction<Currencies>>;
  setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const Currency: React.FC<Props> = ({
  currency,
  countryCode,
  selectMode,
  setSelectMode,
  setCurrency,
  setFilterValue,
}) => {
  return (
    <li
      className={styles.currency}
      onClick={() => {
        if (selectMode) {
          setCurrency(currency);
          setSelectMode(false);
          setFilterValue('');
        }
      }}
    >
      <img
        src={`https://www.countryflags.io/${countryCode}/flat/64.png`}
        alt={`${countryCode} flag`}
      />
      <span>{currency}</span>
      <div className={styles.visible}>
        <span>&nbsp;–&nbsp;</span>
        <span className={styles.fullName}>{currencyFullName[currency]}</span>
      </div>
    </li>
  );
};

export default Currency;
