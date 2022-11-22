import { Button, Container } from "react-bootstrap";

function Rank() {
  return (
    <>
      <Container className="mt-5">
        <h1>극장 이벤트</h1>
        <br />
        <Button variant="outline-primary" className="mb-3">
          이벤트 알아보기
        </Button>
      </Container>
    </>
  );
}

export default Rank;
