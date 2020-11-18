import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router";
import App from './App';
import reportWebVitals from './reportWebVitals';
import VirtualPharmaContextProvider from "./Context/VirtualPharme.Context";
import { configureStore } from './Component/redux/store';
import { createBrowserHistory } from "history";
export const store = configureStore();
export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <VirtualPharmaContextProvider>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </VirtualPharmaContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
