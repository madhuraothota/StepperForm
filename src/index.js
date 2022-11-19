import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App"; //importing App component from App file
import { FormProvider } from "./formcontext/form.context";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
