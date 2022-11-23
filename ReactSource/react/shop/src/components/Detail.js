// 상품상세

// useParams 훅 사용
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

// props로 shoes 데이터 받기
function Detail({ shoes }) {
  // 주소줄에 따라오는 값(0,1,2..) 을 받아내기 위해 필요
  // http://localhost:3000/detail/0
  const { id } = useParams();
  //   console.log("id", id);
  //   console.log(shoes[id]);

  let shoe = shoes[id];
  // shoe 변수를 선언해서 shoes[id]로 받아오는 정보를 담는다.
  // 아래에서 활용

  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={shoe.src} alt={shoe.alt} />
          </Col>
          <Col className="align-self-center" key={shoe.id}>
            <h3 className="my-3">상품명: {shoe.pname}</h3>
            <h4 className="my-3">색상: {shoe.color}</h4>
            <h4 className="my-3">가격: {shoe.price}</h4>
            <Button variant="primary" size="lg">
              구매하기
            </Button>
            &nbsp;&nbsp;
            <Button variant="primary" size="lg">
              제품담기
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
