import React, { useState } from 'react';
import styles from './TabBox.module.css';
import { Currencies, errorMessage } from '../../common/common';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { useEffect } from 'react';
import currencyApi from '../../api/currency';
import Footer from '../Footer/Footer';
import AmountInput from '../AmountInput/AmountInput';
import Swap from '../Swap/Swap';

const TabBox: React.FC = () => {
  const [to, setTo] = useState<Currencies>('RUB');
  const [from, setFrom] = useState<Currencies>('USD');
  const [amount, setAmount] = useState('1.00');
  const [currencyRate, setCurrencyRate] = useState(0);
  const [changeInPercentage, setChangeInPercentage] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [success, setSuccess] = useState(true);

  const setLastCurrencyUpdate = (tm: string) => {
    const date = new Date(tm).toString().split(' ');
    const month = date[1];
    const day = date[2][0] === '0' ? date[2][1] : date[2];
    const year = date[3];
    const time = date[4].split(':').slice(0, 2).join(':');

    return setLastUpdate(`${month} ${day}, ${year}, ${time}`);
  };

  useEffect(() => {
    const fetchRate = async () => {
      const data = await currencyApi.getLatestRate(from, to);

      if (data.status) {
        const rate = data.response[0].o;
        const percents = data.response[0].cp;
        const time = data.response[0].tm;

        setChangeInPercentage(percents);
        setLastCurrencyUpdate(time);
        setCurrencyRate(+rate);
        setError('');
      } else {
        if (data.msg === errorMessage) setCountdown(60);

        if (
          data.msg ===
          'Sorry, Something wrong, or an invalid value. Please try again or check your required parameters.'
        ) {
          setError(`Sorry, this conversion is not supported (API restriction)`);
        } else {
          setError(`${data.msg} (API restriction)`);
        }

        setCurrencyRate(0);
        setChangeInPercentage('');
        setLastUpdate('');
      }
    };

    if (success) fetchRate();
  }, [from, to, success]);

  useEffect(() => {
    if (countdown === 60) {
      setCountdown(60 - 1);
      const interval = setInterval(() => {
        setCountdown(v => +(v - 1).toFixed(2));
      }, 1000);
      const timer = setTimeout(() => {
        setError('');
        setSuccess(true);
        setCountdown(0);
        clearTimeout(timer);
        clearInterval(interval);
      }, 60 * 1000);

      setSuccess(false);
    }
  }, [error, countdown]);

  return (
    <div className={styles.tabBox}>
      <div className={styles.row}>
        <AmountInput amount={amount} from={from} setAmount={setAmount} />
        <CurrencyInput currency={from} label={'From'} setCurrency={setFrom} />
        <Swap from={from} to={to} setFrom={setFrom} setTo={setTo} />
        <CurrencyInput currency={to} label={'To'} setCurrency={setTo} />
      </div>

      <Footer
        countdown={countdown}
        from={from}
        to={to}
        currencyRate={currencyRate}
        changeInPercentage={changeInPercentage}
        amount={amount}
        lastUpdate={lastUpdate}
        error={error}
      />
    </div>
  );
};

export default TabBox;
