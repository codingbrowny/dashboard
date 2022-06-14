import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'
import App from "./App"

import { ContextProvider } from './context/ContextProvider'
import {ThemeProvider} from './context/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ContextProvider>
);
