import { Button, Container } from "react-bootstrap";

function Rank() {
  return (
    <>
      <Container className="mt-5">
        <h1>Ticketing</h1>
        <br />
        <Button variant="outline-primary" className="mb-3">
          영화 예매
        </Button>
      </Container>
    </>
  );
}

export default Rank;
