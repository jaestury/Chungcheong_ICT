import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 라우터 작업하기
import { BrowserRouter } from "react-router-dom";

// Provider은 리액트 리덕스에 있음.
import { Provider } from "react-redux";

// store 넣어주기.
import store from "./store/itemstor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>으로 로그가 두개씩 생기니 잠깐 막고 로그 확인해보기.
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
