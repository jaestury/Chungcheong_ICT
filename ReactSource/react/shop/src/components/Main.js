import "./Main.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Main({ shoes }) {
  console.log("Main", shoes);

  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        <Row>
          {/* map 사용해서 배열 복사하고 
          그 배열을 돌려서 각 항목에 맞춰 출력. */}
          {shoes.map((shoes) => (
            <Col key={shoes.id}>
              {/* key 값은 중복되지 않는 id값으로 사용한다. */}
              <div>
                <img
                  src={shoes.src} // 이미지
                  alt={shoes.alt} // 상품분류
                  className="img-fluid d-block"
                />
                <div className="px-5 h5">
                  <p>
                    <a href={"/detail/" + shoes.id}>{shoes.pname}</a>
                    {/* 상품명(링크) 상품명을 클릭하면 상품상세 페이지 Detail록 넘어가도록 설정 
                    localhost:3000/detail/제품id 경로로 연결됨
                    경로에 속한 제품 id 는 사용자가 어떤 제품을 클릭하게 하는지 알게 하는 의미있는 값이며 
                    이 값을 추출해서 사용하자. */}
                  </p>
                  <p>색상 : {shoes.color}</p>
                  <p>가격 : {shoes.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-3">
          <Button variant="outline-secondary">더보기..</Button>
        </Row>
      </Container>
    </>
  );
}

export default Main;
