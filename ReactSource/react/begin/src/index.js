import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App4 from "./App4";
// import Life from "./Life";
import Styled from "./Styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 아래 코드 <React.StrictMode> 때문에 콘솔에 로그가 두번씩 찍히는 것.
  // <React.StrictMode>
  <Styled />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
