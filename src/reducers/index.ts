import currenciesReducer, { ICurrenciesReducer } from "./currenciesReducer";
import analysisReducre, { IAnalysisReducer } from "./analysisReducer";
import { combineReducers } from "redux";

export interface IAllReducers {
  currencies: ICurrenciesReducer;
  analysis: IAnalysisReducer;
}

const allReducers = combineReducers<IAllReducers>({
  currencies: currenciesReducer,
  analysis: analysisReducre,
});

export default allReducers;
