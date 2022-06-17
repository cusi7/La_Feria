import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.js'
import store from './Redux/Store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)



