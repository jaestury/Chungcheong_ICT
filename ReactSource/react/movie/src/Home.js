import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-3">
      <h2 className="border-bottom border-dark pb-2">현재 상영중</h2>
      <Row className="mt-3">
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86119/86119_320.jpg"
            alt=""
            class="img-fluid w-100"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86420/86420_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86326/86326_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86338/86338_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86205/86205_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86216/86216_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86194/86194_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86522/86522_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86481/86481_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
        <Col>
          <img
            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86483/86483_320.jpg"
            alt=""
            class="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
