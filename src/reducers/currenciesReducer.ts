import { CurrenciesAction } from "../actions/currenciesActions";

export interface ICurrenciesReducer {
  bpi: {
    EUR: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    GBP: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
    USD: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
  updated: string;
}

const initialState = {
  bpi: {
    EUR: {
      code: "EUR",
      symbol: "&euro;",
      rate: "0",
      description: "Euro",
      rate_float: 0,
    },
    GBP: {
      code: "GBP",
      symbol: "&pound;",
      rate: "0",
      description: "British Pound Sterling",
      rate_float: 0,
    },
    USD: {
      code: "USD",
      symbol: "&#36;",
      rate: "0",
      description: "United States Dollar",
      rate_float: 0,
    },
  },
  updated: "",
};

const currenciesReducer = (
  state: ICurrenciesReducer = initialState,
  action: CurrenciesAction
) => {
  switch (action.type) {
    case "UPDATE_CURRENCIES":
      return action.payload;
    default:
      return state;
  }
};

export default currenciesReducer;
