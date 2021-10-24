import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Currencies,
  CurrencyCode,
  currencyFullName,
} from '../../common/common';
import styles from './Currency.module.css';
import BTCImg from '../../assets/BTC.png';
import { FlagIcon } from 'react-flag-kit';

interface Props {
  currency: Currencies;
  countryCode: CurrencyCode;
  selectMode: boolean;
  setCurrency: ActionCreatorWithPayload<Currencies>;
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
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (selectMode) {
      dispatch(setCurrency(currency));
      setSelectMode(false);
      setFilterValue('');
    }
  };

  return (
    <li className={styles.currency} onClick={clickHandler}>
      {currency === 'BTC' ? (
        <img src={BTCImg} alt='BTC' />
      ) : (
        <FlagIcon code={countryCode} />
      )}

      <span>{currency}</span>
      <div className={styles.visible}>
        <span>&nbsp;–&nbsp;</span>
        <span className={styles.fullName}>{currencyFullName[currency]}</span>
      </div>
    </li>
  );
};

export default Currency;
