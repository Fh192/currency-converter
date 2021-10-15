export interface LatestRateResponse {
  status: boolean;
  code: 200 | 213 | 113; //200: Success; 213: Access limit; 113: Bad request;
  response: [
    {
      o: string; //rate
      cp: string; //Change in percentage
      t: string; // When update last time (UTC)
    }
  ];
}

export const errors = [
  null,
  'Sorry, this conversion is not supported',
  'You have reached maximum 3 limit per minute in free account',
] as const;

export type ErrorTypes = typeof errors[number];
