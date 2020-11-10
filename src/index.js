import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
