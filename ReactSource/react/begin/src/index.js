import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Router from "./Router";
import { Provider } from "react-redux";
import store from "./store";
import Redux from "./Redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 아래 코드 <React.StrictMode> 때문에 콘솔에 로그가 두번씩 찍히는 것.
  // Redux를 포함해서 하위 자식 컴포넌트에서 store에 저장된 state 사용 가능
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Redux />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
