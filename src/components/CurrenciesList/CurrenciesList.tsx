import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { useEffect, useRef, useState } from 'react';
import {
  Currencies,
  currencyCodeMap,
  currencyFullName,
} from '../../common/common';
import Currency from '../Currency/Currency';
import styles from './CurrenciesList.module.css';

interface Props {
  selectMode: boolean;
  filterValue: string;

  setCurrency: ActionCreatorWithPayload<Currencies>;
  setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const CurrenciesList: React.FC<Props> = ({ filterValue, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const currencies = Object.keys(currencyCodeMap) as Array<Currencies>;
  const [visibleItemsCount, setVisibleItemsCount] = useState(10);

  const filterCurrency = (currency: Currencies) => {
    if (filterValue.length > 0) {
      return (
        currency.match(filterValue) ||
        currencyFullName[currency].toUpperCase().match(filterValue)
      );
    }

    return currency;
  };

  const filteredCurrencies = currencies.filter(filterCurrency);

  useEffect(() => {
    const el = ref.current;

    const listener = (e: Event) => {
      if (el) {
        if (el.scrollHeight - el.clientHeight - el.scrollTop <= 200) {
          if (visibleItemsCount < currencies.length) {
            setVisibleItemsCount(c => c + 10);
          }
        }
      }
    };
    el?.addEventListener('scroll', listener);
    return () => el?.removeEventListener('scroll', listener);
  }, [ref, visibleItemsCount, currencies]);

  return (
    <ul
      className={`${styles.currenciesList} ${
        props.selectMode && styles.visible
      } ${!filteredCurrencies.length && styles.noResultsList}`}
      ref={ref}
    >
      {filteredCurrencies.length > 0 ? (
        <>
          {filteredCurrencies.splice(0, visibleItemsCount).map(currency => (
            <Currency
              setCurrency={props.setCurrency}
              currency={currency}
              countryCode={currencyCodeMap[currency]}
              selectMode={props.selectMode}
              setSelectMode={props.setSelectMode}
              setFilterValue={props.setFilterValue}
              key={currency}
            />
          ))}
        </>
      ) : (
        <div className={styles.noResults}>
          <span>No results available</span>
        </div>
      )}
    </ul>
  );
};

export default CurrenciesList;
