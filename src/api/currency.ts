import { LatestRateResponse } from './../types/apiTypes';
import instance, { access_key } from './instance';

const currencyApi = {
  getLatestRate: async (from: string, to: string) => {
    const response = await instance.get<LatestRateResponse>(
      `latest?symbol=${from}/${to}&access_key=${access_key}`
    );

    return response.data;
  },
};

export default currencyApi;
