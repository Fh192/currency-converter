export interface LatestRateResponse {
  status: boolean;
  code: 200 | 213 | 113 | 101;
  msg:
    | 'Successfully'
    | 'Sorry, Something wrong, or an invalid value. Please try again or check your required parameters.'
    | 'Access block for you, You have reached maximum 3 limit per minute in free account, Please stop extra hits or upgrade your account. Restriction remove after 1 minute.'
    | 'Access block for you, You have reached maximum 3 limit per minute in free account, Please stop extra hits or upgrade your account. Restriction remove after 1 minute.';
  response: [
    {
      o: string; //rate
      cp: string; //Change in percentage
      tm: string; // When update last time (UTC)
    }
  ];
}
