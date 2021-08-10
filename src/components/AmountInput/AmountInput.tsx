import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { Currencies, setCommasInNumber } from '../../common/common';
import styles from './AmountInput.module.css';

interface Props {
  from: Currencies;
  amount: string;

  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

const AmountInput: React.FC<Props> = ({ from, amount, setAmount }) => {
  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(',', '');

    if (isNaN(+value)) {
      setAmount(a => a);
    } else {
      setAmount(value);
    }
  };

  return (
    <div className={styles.inputWrap}>
      <label className={styles.inputName} htmlFor='amount'>
        Amount
      </label>
      <div className={styles.inputInner}>
        <div className={styles.currencySymbol}>
          {getSymbolFromCurrency(from)}
        </div>
        <input
          type='text'
          id='amount'
          value={setCommasInNumber(amount)}
          onChange={onAmountChange}
          onBlur={() => {
            if (+amount <= 0) setAmount('1');
            setAmount(a => (+a).toFixed(2).toString());
          }}
          onClick={() => {
            setAmount(a => {
              if (Number.isInteger(+a)) {
                return (+a).toFixed(0).toString();
              }
              return a;
            });
          }}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default AmountInput;
