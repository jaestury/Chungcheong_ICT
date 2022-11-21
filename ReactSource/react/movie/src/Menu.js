import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/rank">순위</Nav.Link>
            <Nav.Link href="/theater">극장</Nav.Link>
            <Nav.Link href="/ticket">예매</Nav.Link>
            <Nav.Link href="/store">스토어</Nav.Link>
            <Nav.Link href="/event">이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
