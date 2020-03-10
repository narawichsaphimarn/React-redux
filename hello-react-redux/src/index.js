import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import rootReducer from "./component/reducers/index";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
