import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommasInNumber } from '../../common/common';
import { setAmount } from '../../store/actions/currencyActions';
import { RootState } from '../../store/store';
import styles from './AmountInput.module.css';

const AmountInput: React.FC = () => {
  const dispatch = useDispatch();
  const { base, amount } = useSelector((s: RootState) => s.currency);

  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(',', '');

    if (!isNaN(+value)) {
      dispatch(setAmount(value));
    }
  };

  const blurHandler = () => {
    if (+amount <= 0) {
      dispatch(setAmount('1.00'));
    } else {
      dispatch(setAmount((+amount).toFixed(2).toString()));
    }
  };

  const clickHandler = () => {
    const value = Number.isInteger(+amount)
      ? (+amount).toFixed(0).toString()
      : amount;

    dispatch(setAmount(value));
  };

  return (
    <div className={styles.inputWrap}>
      <label className={styles.inputName} htmlFor='amount'>
        Amount
      </label>
      <div className={styles.inputInner}>
        <div className={styles.currencySymbol}>
          {getSymbolFromCurrency(base)}
        </div>
        <input
          type='text'
          id='amount'
          value={setCommasInNumber(amount)}
          onChange={onAmountChange}
          onBlur={blurHandler}
          onClick={clickHandler}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default AmountInput;
