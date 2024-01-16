import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <Provider store={store}>
  <App />
  </Provider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
