// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rank from "./Rank";
import Menu from "./Menu";
import Theater from "./Theater";
import Ticket from "./Ticket";
import Store from "./Store";
import Event from "./Event";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        {/* 라우터 방식으로 페이지 표기. 이렇게만 해도 페이지 출력이 된당. */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/rank" element={<Rank />}></Route>
        <Route path="/theater" element={<Theater />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/Event" element={<Event />}></Route>
      </Routes>
    </div>
  );
}

export default App;
