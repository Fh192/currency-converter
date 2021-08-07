export interface LatestRateResponse {
  status: boolean;
  code: 200 | 113 | 101;
  msg:
    | 'Successfully'
    | 'Sorry, Something wrong, or an invalid value. Please try again or check your required parameters.';
  response: [
    {
      o: string; //rate
      cp: string; //Change in percentage
    }
  ];
}
