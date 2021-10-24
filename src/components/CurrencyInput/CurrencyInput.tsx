import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { currencyCodeMap } from '../../common/common';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { setBase, setQuote } from '../../store/actions/currencyActions';
import { RootState } from '../../store/store';
import Arrow from '../../svg/Arrow';
import Cross from '../../svg/Сross';
import CurrenciesList from '../CurrenciesList/CurrenciesList';
import Currency from '../Currency/Currency';
import styles from './CurrencyInput.module.css';

interface Props {
  label: 'To' | 'From';
  disableRequests: boolean;
}

const CurrencyInput: React.FC<Props> = ({ label, disableRequests }) => {
  const ref = useRef(null);

  const currency = useSelector((s: RootState) =>
    label === 'From' ? s.currency.base : s.currency.quote
  );
  const setCurrency = label === 'From' ? setBase : setQuote;

  const [selectMode, setSelectMode] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useOnClickOutside(ref, () => {
    if (selectMode) {
      setFilterValue('');
      setSelectMode(false);
    }
  });

  const clickHandler = () => {
    if (!disableRequests) {
      setSelectMode(true);
    }
  };

  return (
    <div className={styles.inputWrap}>
      <label className={styles.inputName} htmlFor='from' onClick={clickHandler}>
        {label}
      </label>
      <div className={styles.wrapper} ref={ref}>
        {selectMode ? (
          <div className={styles.inputInner}>
            <input
              type='text'
              id={label}
              value={filterValue}
              onChange={e => setFilterValue(e.target.value.toUpperCase())}
              placeholder='Type to search...'
              autoComplete='off'
            />

            <div
              className={styles.crossWrap}
              onClick={() => setSelectMode(false)}
            >
              <Cross size='13px' />
            </div>
          </div>
        ) : (
          <div className={styles.currencyWrap} onClick={clickHandler}>
            <Currency
              countryCode={currencyCodeMap[currency]}
              selectMode={selectMode}
              currency={currency}
              setCurrency={setCurrency}
              setSelectMode={setSelectMode}
              setFilterValue={setFilterValue}
            />
            <div className={styles.arrowWrap} onClick={clickHandler}>
              <Arrow size='16px' />
            </div>
          </div>
        )}
        <CurrenciesList
          setCurrency={setCurrency}
          filterValue={filterValue}
          selectMode={selectMode}
          setSelectMode={setSelectMode}
          setFilterValue={setFilterValue}
        />
      </div>
    </div>
  );
};

export default CurrencyInput;
