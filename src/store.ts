import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default store;
