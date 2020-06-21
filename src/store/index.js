import React from "react";
import { createStore } from "redux";
import myReducer from "../reducers";

const store = createStore(
  myReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
