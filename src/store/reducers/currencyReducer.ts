import { ErrorTypes } from './../../types/apiTypes';
import {
  setRate,
  setBase,
  setQuote,
  setLastUpdate,
  setPercentChange,
  setAmount,
  setError,
} from './../actions/currencyActions';
import { createReducer } from '@reduxjs/toolkit';
import { Nullable, RootDispatch } from '../store';
import currencyApi from '../../api/currency';
import { Currencies } from '../../common/common';

const initialState = {
  base: 'USD' as Currencies,
  quote: 'RUB' as Currencies,
  amount: '1.00',
  rate: null as Nullable<number>,
  change: null as Nullable<string>,
  lastUpdate: null as Nullable<number>,
  error: null as Nullable<ErrorTypes>,
};

export const currencyReducer = createReducer(initialState, b => {
  b.addCase(setRate, (state, action) => {
    state.rate = action.payload;
  });

  b.addCase(setBase, (state, action) => {
    state.base = action.payload;
  });

  b.addCase(setQuote, (state, action) => {
    state.quote = action.payload;
  });

  b.addCase(setLastUpdate, (state, action) => {
    state.lastUpdate = action.payload;
  });

  b.addCase(setPercentChange, (state, action) => {
    state.change = action.payload;
  });

  b.addCase(setAmount, (state, action) => {
    state.amount = action.payload;
  });

  b.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export const getRates =
  (from: string, to: string) => async (dispatch: RootDispatch) => {
    const data = await currencyApi.getLatestRate(from, to);
    const code = data.code;
    let errMessage: ErrorTypes = null;

    if (code === 200) {
      const { cp, o, t } = data.response[0];

      dispatch(setRate(+o));
      dispatch(setPercentChange(cp));
      dispatch(setLastUpdate(+t));
    } else {
      if (code === 113) {
        errMessage = 'Sorry, this conversion is not supported';
      } else if (code === 213) {
        errMessage =
          'You have reached maximum 3 limit per minute in free account';
      }
    }

    dispatch(setError(errMessage));
  };
