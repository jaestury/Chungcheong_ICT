// 상단바 지정. 로고+메뉴 등

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

function App() {
  // 최초 데이터 세팅.
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
            <Navbar.Brand href="/">
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
                <NavDropdown.Divider />
                <NavDropdown.Item href="#special">Special</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/exer">운동화</Nav.Link>
              <Nav.Link href="/heel">구두</Nav.Link>
              <Nav.Link href="/boot">부츠/워커</Nav.Link>
              <Nav.Link href="/cart">
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
      {/* 라우터 이용해서 Main을 사용하자
      그냥 새로고침이 아닌 라우터로 사용 */}
      <Routes>
        {/* Main, detail으로 데이터 넘기기. props 사용 */}
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        {/* path가 변화하는 경우, "/detail/:변수" 형식으로 작성해준다.
        상품상세 페이지가 출력된다. */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
