import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// note how above we import from 'react-redux'
import "./index.css";
import App from "./App";
// must import the store below
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // must wrap the root component with the provider
  <Provider store={store}>
    <App />
  </Provider>
);

// note the similarity to React Context
// note -- could also wrap nested components with provider
// only wrapped components with have access to the store
// above will provide access to entire app
