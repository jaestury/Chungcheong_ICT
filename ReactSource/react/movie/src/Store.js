import { Button, Container } from "react-bootstrap";

function Rank() {
  return (
    <>
      <Container className="mt-5">
        <h1>스낵&상품</h1>
        <br />
        <Button variant="outline-primary" className="mb-3">
          음식 구매
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outline-primary" className="mb-3">
          상품 구매
        </Button>
      </Container>
    </>
  );
}

export default Rank;
