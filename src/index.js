import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "./context/weather";
import { reducer } from "./context/reducer";
import { storageScheme } from "./utils/scheme";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider
    initialState={storageScheme}
    reducer={reducer}
  >
    <App />
  </Provider>
)
