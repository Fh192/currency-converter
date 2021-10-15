import { LatestRateResponse } from './../types/apiTypes';
import { instance, apiKey } from './instance';

const currencyApi = {
  getLatestRate: async (from: string, to: string) => {
    const response = await instance.get<LatestRateResponse>(
      `latest?symbol=${from}/${to}&access_key=${apiKey}`
    );

    return response.data;
  },
};

export default currencyApi;
