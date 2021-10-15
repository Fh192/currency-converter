export type Currencies = keyof typeof currencyFullName;
export type CurrencyFullName = { [key in Currencies]: string };
export type CurrencyCodeMap = { [key in Currencies]: string };
export type CurrencyCode = typeof currencyCodes[number];

export const currencyFullName = {
  ARS: 'Argentine Peso',
  AUD: 'Australian Dollar',
  AZN: 'Azerbaijani Manat',
  BHD: 'Bahraini Dinar',
  BTC: 'Bitcoin',
  BOB: 'Bolivian Boliviano',
  BRL: 'Brazilian Real',
  GBP: 'British Pound Sterling',
  BND: 'Brunei Dollar',
  CAD: 'Canadian Dollar',
  KYD: 'Cayman Islands Dollar',
  CLP: 'Chilean Peso',
  CNY: 'Chinese Yuan',
  COP: 'Colombian Peso',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  EGP: 'Egyptian Pound',
  EUR: 'Euro',
  FJD: 'Fijian Dollar',
  GEL: 'Georgian Lari',
  GHS: 'Ghanaian Cedi',
  HKD: 'Hong Kong Dollar',
  HUF: 'Hungarian Forint',
  ISK: 'Icelandic KrÃ³na',
  INR: 'Indian Rupee',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  JPY: 'Japanese Yen',
  JOD: 'Jordanian Dinar',
  KZT: 'Kazakhstani Tenge',
  KWD: 'Kuwaiti Dinar',
  MYR: 'Malaysian Ringgit',
  MXN: 'Mexican Peso',
  MAD: 'Moroccan Dirham',
  TWD: 'New Taiwan Dollar',
  NZD: 'New Zealand Dollar',
  NIO: 'Nicaraguan CÃ³rdoba',
  NOK: 'Norwegian Krone',
  OMR: 'Omani Rial',
  PKR: 'Pakistani Rupee',
  PYG: 'Paraguayan Guarani',
  PEN: 'Peruvian Nuevo Sol',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  QAR: 'Qatari Rial',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SAR: 'Saudi Riyal',
  SGD: 'Singapore Dollar',
  ZAR: 'South African Rand',
  KRW: 'South Korean Won',
  SEK: 'Swedish Krona',
  CHF: 'Swiss Franc',
  THB: 'Thai Baht',
  TND: 'Tunisian Dinar',
  TRY: 'Turkish Lira',
  UAH: 'Ukrainian Hryvnia',
  AED: 'United Arab Emirates Dirham',
  UYU: 'Uruguayan Peso',
  USD: 'US Dollar',
  VEF: 'Venezuelan BolÃ­var',
  VND: 'Vietnamese Dong',
} as const;
export const currencyCodes = [
  'AR',
  'AU',
  'AZ',
  'BH',
  'BT',
  'BO',
  'BR',
  'GB',
  'BN',
  'CA',
  'KY',
  'CL',
  'CN',
  'CO',
  'CZ',
  'DK',
  'EG',
  'EU',
  'FJ',
  'GE',
  'GH',
  'HK',
  'HU',
  'IS',
  'IN',
  'ID',
  'IL',
  'JP',
  'JO',
  'KZ',
  'KW',
  'MY',
  'MX',
  'MA',
  'TW',
  'NZ',
  'NI',
  'NO',
  'OM',
  'PK',
  'PY',
  'PE',
  'PH',
  'PL',
  'QA',
  'RO',
  'RU',
  'SA',
  'SG',
  'ZA',
  'KR',
  'SE',
  'CH',
  'TH',
  'TN',
  'TR',
  'UA',
  'AE',
  'UY',
  'US',
  'VE',
  'VN',
] as const;

export const currencyCodeMap = Object.fromEntries(
  (Object.keys(currencyFullName) as Array<Currencies>).map(el => [
    el,
    el[0] + el[1],
  ])
) as { [key in Currencies]: CurrencyCode };

export const setCommasInNumber = (value: string) => {
  const splitValue = value.split('.');
  let result = '';
  let counter = 0;

  for (let i = splitValue[0].length - 1; i >= 0; i--) {
    result += splitValue[0][i];
    counter += 1;

    if (counter === 3) {
      counter = 0;
      result += ',';
    }
  }

  result = result.split('').reverse().join('');

  if (splitValue[1] !== undefined) result += '.' + splitValue[1];

  if (result[0] === ',') {
    result = result.replace(result[0], '');
  }

  return result;
};

export const errorMessage =
  'Access block for you, You have reached maximum 3 limit per minute in free account, Please stop extra hits or upgrade your account. Restriction remove after 1 minute.';
