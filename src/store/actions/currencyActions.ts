import { createAction } from '@reduxjs/toolkit';
import { Currencies } from '../../common/common';
import { ErrorTypes } from '../../types/apiTypes';

export const setRate = createAction<number>('c/SET_RATE');
export const setBase = createAction<Currencies>('c/SET_BASE');
export const setQuote = createAction<Currencies>('c/SET_QUOTE');
export const setAmount = createAction<string>('c/SET_AMOUNT');
export const setPercentChange = createAction<string>('c/SET_PERCENT_CHANGE');
export const setLastUpdate = createAction<number>('c/SET_LAST_UPDATE');
export const setError = createAction<ErrorTypes>('c/SET_ERROR');
