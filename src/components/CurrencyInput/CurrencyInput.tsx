import React, { useRef, useState } from 'react';
import { Currencies, currencyCodeMap } from '../../common/common';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Arrow from '../../svg/Arrow';
import Cross from '../../svg/Сross';
import CurrenciesList from '../CurrenciesList/CurrenciesList';
import Currency from '../Currency/Currency';
import styles from './CurrencyInput.module.css';

interface Props {
  setCurrency: React.Dispatch<React.SetStateAction<Currencies>>;
  currency: Currencies;
  label: 'To' | 'From';
}

const CurrencyInput: React.FC<Props> = ({ label, currency, setCurrency }) => {
  const ref = useRef(null);

  const [selectMode, setSelectMode] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useOnClickOutside(ref, () => {
    if (selectMode) setFilterValue('');
    setSelectMode(false);
  });

  return (
    <div className={styles.inputWrap}>
      <label
        className={styles.inputName}
        htmlFor='from'
        onClick={() => setSelectMode(true)}
      >
        {label}
      </label>
      <>
        {selectMode ? (
          <div className={styles.inputInner} ref={ref}>
            <input
              type='text'
              id={label}
              value={filterValue}
              autoFocus={true}
              onChange={e => setFilterValue(e.target.value.toUpperCase())}
              placeholder='Type to search...'
              autoComplete='off'
            />
            <CurrenciesList
              filterValue={filterValue}
              selectMode={selectMode}
              setCurrency={setCurrency}
              setSelectMode={setSelectMode}
              setFilterValue={setFilterValue}
            />
            <div
              className={styles.crossWrap}
              onClick={() => setSelectMode(false)}
            >
              <Cross size='13px' />
            </div>
          </div>
        ) : (
          <div
            className={styles.currencyWrap}
            onClick={() => setSelectMode(true)}
          >
            <Currency
              countryCode={currencyCodeMap[currency]}
              selectMode={selectMode}
              currency={currency}
              setCurrency={setCurrency}
              setSelectMode={setSelectMode}
              setFilterValue={setFilterValue}
            />
            <div
              className={styles.arrowWrap}
              onClick={() => setSelectMode(true)}
            >
              <Arrow size='16px' />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CurrencyInput;
