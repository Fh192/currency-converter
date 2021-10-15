import React, { useState } from 'react';
import styles from './TabBox.module.css';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import AmountInput from '../AmountInput/AmountInput';
import Swap from '../Swap/Swap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getRates } from '../../store/reducers/currencyReducer';
import { errors } from '../../types/apiTypes';
import { setPercentChange, setRate } from '../../store/actions/currencyActions';

const TabBox: React.FC = () => {
  const dispatch = useDispatch();

  const { base, quote, error } = useSelector((s: RootState) => s.currency);
  const [countdown, setCountdown] = useState(0);
  const [disableRequests, setDisableRequests] = useState(false);

  useEffect(() => {
    if (error === errors[1]) {
      dispatch(setRate(0));
      dispatch(setPercentChange('0%'));
    } else if (error === errors[2]) {
      setCountdown(63);
      setDisableRequests(true);

      const interval = setInterval(() => {
        setCountdown(c => {
          if (c <= 0) {
            setDisableRequests(false);
            clearInterval(interval);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }
  }, [error]);

  useEffect(() => {
    if (!disableRequests) {
      if (base === quote) {
        dispatch(setRate(1));
        dispatch(setPercentChange('0%'));
      } else {
        dispatch(getRates(base, quote));
      }
    }
  }, [base, quote, disableRequests, dispatch]);

  return (
    <div className={styles.tabBox}>
      <div className={styles.row}>
        <AmountInput />
        <CurrencyInput disableRequests={disableRequests} label={'From'} />
        <Swap disableRequests={disableRequests} />
        <CurrencyInput disableRequests={disableRequests} label={'To'} />
      </div>
      <Footer countdown={countdown} />
    </div>
  );
};

export default TabBox;
