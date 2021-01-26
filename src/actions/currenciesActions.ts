import { ICurrenciesReducer } from "../reducers/currenciesReducer";

export type CurrenciesAction = {
  type: "UPDATE_CURRENCIES";
  payload: ICurrenciesReducer;
};

export const updateCurrencies = (
  data: ICurrenciesReducer
): CurrenciesAction => ({
  type: "UPDATE_CURRENCIES",
  payload: data,
});
