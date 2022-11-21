// 라우터 사용 단계
// 1. index.js 라우터 사용 코드 적용
//      <BrowserRouter><App /></ BrowserRouter>
// 2. 라우터를 사용할 컴포넌트에 가서 적용
//      <Routes><Routes /></ Routes>

// 라우터 장점
// <Link>, useNavigate : html 링크 기능 + 컴포넌트에서 변화된 props 유지
// 추가된 데이터를 유지시켜준다.
// 일반 html 링크는 데이터 유지 x. 라우터 사용하면 데이터 유지 o.
// 라우터 방식으로 이동 하는 중간에 html 링크 방식으로 이동하면 페이지가 새로고침되면서 데이터가 사라진다.

// 중첩 라우터 Nested routes : 서브 경로
// http://localhost:3000/member 라는 멤버 페이지
// http://localhost:3000/member/brard, 에서 멤버만 접근할 수 있는 보드 페이지
// http://localhost:3000/member/info, 에서 멤버만 접근할 수 있는 정보 페이지
// 등 member 페이지에서 접근할 수 있는 여러 페이지가 있을때 쓰는 개념
// 전체적인 디자인은 거의 유사하지만 일부분만 다를 경우 + url도 거의 같음.

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import About from "./About";
import Home from "./Home";
import Member from "./Member";
import Register from "./Register";
import Error from "./Error";
import { useState } from "react";

function Router() {
  let navigate = useNavigate();
  console.log("navigate", navigate);

  const [users, setUsers] = useState([
    { id: 1, username: "velocity", email: "velocity@gmail.com", active: true },
    { id: 2, username: "eclipse", email: "eclipse@gmail.com", active: false },
    { id: 3, username: "tiger", email: "tiger@gmail.com", active: false },
  ]);

  const onClick = () => {
    setUsers([
      ...users,
      { id: 4, username: "lion", email: "lion@gmail.com", active: false },
    ]);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/member">Member</Nav.Link>
              <Nav.Link href="/member/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <button onClick={onClick}>user 추가</button>
      </div>
      {/* path="/" : http://localhost:3000 
      path="/about" : http://localhost:3000/about*/}
      <Routes>
        {/* Route path에 경로 지정, element : 컴포넌트 지정 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/member" element={<Member />} />
        <Route path="/member/register" element={<Register />} /> */}
        <Route path="/member" element={<Member users={users} />}>
          <Route path="/member/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
        {/* route가 route를 포함한다. 근데 그냥 포함만하면 상위컴포넌트가 하위 컴포넌트를 덮어버리게 된다. 
        <Outlet> 태그를 사용해서 상위 페이지 내에서 하위 페이지가 나타나도록 작업 해주자. 
        Member.js 참고. */}
      </Routes>

      {/* Link, Navigate() : a 태그와 같은 역할 
      navigate는 함수이기 때문에 이벤트를 걸 수 있다. 숫자 지정이 가능.*/}
      <div>
        <h3>Link 사용</h3>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/member">Member</Link>
      </div>
      <div>
        <h3>Navigate() 함수 사용</h3>
        <Button variant="primary" onClick={() => navigate("/")}>
          Home
        </Button>{" "}
        <Button variant="secondary" onClick={() => navigate("/about")}>
          About
        </Button>{" "}
        <Button variant="info" onClick={() => navigate(-1)}>
          이동
        </Button>{" "}
        <Button variant="danger" onClick={() => navigate("/member")}>
          Member
        </Button>{" "}
      </div>
    </>
  );
}

export default Router;
