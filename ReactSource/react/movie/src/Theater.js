import { Button, Container } from "react-bootstrap";

function Rank() {
  return (
    <>
      <Container className="mt-5">
        <h1>영화관 정보</h1>
        <br />
        <Button variant="outline-primary" className="mb-3">
          영화관 찾기
        </Button>
      </Container>
    </>
  );
}

export default Rank;
