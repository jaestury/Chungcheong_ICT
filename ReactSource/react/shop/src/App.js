// 페이지의 전체적 형태

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

// 라우터 작업. 링크걸었을 때 정보 유지시켜주는 기능.
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import Event from "./components/Event";
import One from "./components/One";
import Two from "./components/Two";
import Cart from "./components/Cart";

function App() {
  // navigate 사용을 위한 변수 선언
  let navigate = useNavigate();

  // 최초 데이터 세팅.
  // 화면에 변화를 주는 변수는 useState로 선언해야한다. re렌더링 시 반영된다.
  // 일반변수, useState로 만드는 변수, useRef로 만드는 변수 3가지를 적절히 이용해서 보기 좋은 웹페이지를 만들자.
  // 데이터가 추가되고 re렌더링 시 화면에 반영되어야 하기 때문에 useState 사용.
  const [shoes, setShoes] = useState([
    {
      id: 0,
      src: "/shoes/adidas1.jpg",
      alt: "아디다스 운동화",
      pname: "그랜드 코트 KEF0101",
      color: "화이트 + 로드골드",
      price: "46,900원",
    },
    {
      id: 1,
      src: "/shoes/gag1.jpg",
      alt: "소가죽 골프화",
      pname: "남성화 소가죽 다이얼 골프화 GF3002",
      color: "블랙 + 브라운",
      price: "69,900원",
    },
    {
      id: 2,
      src: "/shoes/nike1.jpg",
      alt: "나이키 운동화",
      pname: "REVOLUTION 6",
      color: "블랙 + 화이트 + 아이언 그레이",
      price: "57,780원",
    },
    {
      id: 3,
      src: "/shoes/newbalance1.jpg",
      alt: "뉴발란스 운동화",
      pname: "MHANZRK2",
      color: "화이트",
      price: "89,300원",
    },
  ]);

  return (
    <div>
      <Container className="my-2" fluid>
        <Row className="text-center">
          <Col>
            {/* 로고에도 useNavigate를 사용해서 데이터 유지하면서 움직여보자. */}
            <Navbar.Brand
              href="#"
              onClick={(e) => {
                // a 태그의 기본적 동작. 이동을 하게 되어있다. 그것을 막기 위해 사용
                e.preventDefault(); // 기본 클릭 동작 방지.
                navigate("/");
              }}
            >
              <img
                src="/logo-no-background.png"
                alt="로고"
                style={{
                  width: "200px",
                  height: "124px",
                }}
                className="d-inline-block"
              />
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <NavDropdown title="전체 카테고리" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exer">운동화</NavDropdown.Item>
                <NavDropdown.Item href="/heel">구두</NavDropdown.Item>
                <NavDropdown.Item href="/boot">부츠/워커</NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/event/two");
                  }}
                >
                  이벤트
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#special">Special</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/exer">운동화</Nav.Link>
              <Nav.Link href="/heel">구두</Nav.Link>
              <Nav.Link href="/boot">부츠/워커</Nav.Link>
              <Nav.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/event/one");
                }}
              >
                이벤트
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/cart");
                }}
              >
                <span className="material-symbols-outlined">shopping_cart</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 라우터 이용해서 Main을 사용하자. 그냥 새로고침이 아닌 라우터로 사용 */}
      <Routes>
        {/* Main, detail으로 데이터 넘기기. props 사용 */}
        <Route
          path="/"
          element={
            <Main
              shoes={shoes}
              // Main에서 데이터를 받지만, App으로 데이터를 넘기는 것은 불가능하다. App이 부모이기 때문.
              // App에서 변경함수를 만들어서 Main에 있는 데이터를 뽑아가는 구조로 만들어야한다.
              setShoes={setShoes}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        {/* path가 변화하는 경우, "/detail/:변수" 형식으로 작성해준다.
        상품상세 페이지가 출력된다. */}

        {/* 라우터 안에 라우터가 들어갈 수 있다.
        페이지 이동이 메인 페이지에서 내부 페이지, 또 속 페이지로 들어가는 경우가 있기 때문에 
        라우터 안에 라우터 페이지를 넣는 형태를 활용할 수 있다. */}
        {/* 서로 다른 공통의 디자인을 갖고 있을 때는 라우터 페이지 속 라우터 페이지 형태의 구성이 더 좋다. */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
        </Route>

        {/* 라우터로 장바구니 페이지 연결 */}
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
