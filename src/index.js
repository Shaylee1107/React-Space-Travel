import React from "react";
import ReactDOM from "react-dom/client";
import LoadingWrapper from "./providers/LoadingWrapper";
import "./index.css";
import App from "./App";
// import Loading from './components/Loading';
// import LoadingContext from './context/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoadingWrapper>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </LoadingWrapper>
);
