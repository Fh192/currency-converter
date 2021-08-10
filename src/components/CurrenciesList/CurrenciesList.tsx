import React from 'react';
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
  
  setCurrency: React.Dispatch<React.SetStateAction<Currencies>>;
  setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const CurrenciesList: React.FC<Props> = ({ filterValue, ...props }) => {
  const currencies = Object.keys(currencyCodeMap) as Array<Currencies>;

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

  return (
    <ul className={styles.currenciesList}>
      {filteredCurrencies.length > 0 ? (
        <>
          {filteredCurrencies.map(currency => (
            <Currency
              currency={currency}
              countryCode={currencyCodeMap[currency]}
              selectMode={props.selectMode}
              setSelectMode={props.setSelectMode}
              setFilterValue={props.setFilterValue}
              setCurrency={props.setCurrency}
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
