// 상품상세

// useParams 훅 사용. 라우터 기능
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Table,
  Form,
  Nav,
} from "react-bootstrap";

// useEffect는 리액트의 기능
import { useEffect, useState } from "react";

// 리덕스 사용
import { addCart } from "../store/itemstor";
import { useDispatch } from "react-redux";

// props로 shoes 데이터 받기
function Detail({ shoes }) {
  // itemstore 함수 호출
  let dispatch = useDispatch();

  let navigate = useNavigate();

  // 주소줄에 따라오는 값(0,1,2..) 을 받아내기 위해 필요. Hook
  // http://localhost:3000/detail/0
  const { id } = useParams();
  //   console.log("id", id);
  //   console.log(shoes[id]);

  // shoe 변수를 선언해서 shoes[id]로 받아오는 정보를 담는다.
  // 아래에서 활용
  let shoe = shoes[id];

  // 이벤트 광고창 만들기. 변수 관리
  const [discount, setDiscount] = useState(
    <Col>
      <Alert variant="danger">해당 상품을 3초이내 구입 시 20% 특별할인</Alert>
    </Col>
  );

  // 수량 관리
  const [amount, setAmount] = useState(0);

  // useEffect를 사용해서 렌더링 시점에서 이벤트틀 출력해보자.
  // 비동기 식으로 실행됨. 실행 맡겨놓고 아래로 내려가며 계속 코드를 실행한다.
  // 상품 상세보기에서 이벤트 페이지 보여주기 및 없애기.
  useEffect(() => {
    console.log("마운트 될 때 / 업데이트 될 때");

    // 3초 시간 재기. 변수로 지정
    let timeout = setTimeout(() => {
      setDiscount(null);
    }, 3000);

    // 수량에 문자 들어오는 것을 방지하기.
    // 'isNaN' 이라는 자바스크립트 함수.
    // Not a Number : 숫자인지 아닌지 검증. 숫자면 false, 문자면 true. is~ 형태의 함수는 ture/false 값을 반환한다.
    // 순수 숫자일 때만 false 반환. 섞여있으면 true 반환해준다.
    if (isNaN(amount)) {
      alert("입력 값을 확인해주세요");
      setAmount(0);
    }

    // 언마운트 되는 시점에 아예 timeout 객체를 해제해준다.
    return () => {
      console.log("언마운트 될 때");
      clearTimeout(timeout);
    };
    // useState로 관리되는 변수를 지정해서, update 될 떄 관리.
  }, [amount]);

  // JSX 식에는 부모 요소가 하나 있어야 합니다.  >> 오류
  // 모든 자식 태그들은 최소 부모 요소 하나 이상으로 감싸야한다.
  // <div> 를 추가해서 해결할 수 있다.
  return (
    <>
      <Container>
        {shoe ? (
          <div>
            <Row>{discount}</Row>
            <Row className="align-self-center">
              <Col>
                <img
                  src={shoe.src}
                  alt={shoe.alt}
                  style={{ width: "600px", height: "600px" }}
                />
              </Col>
              <Col className="align-self-center" key={shoe.id}>
                <Table>
                  <tbody>
                    <tr>
                      <td>제품명</td>
                      <td>
                        <b>{shoe.pname}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>색상</td>
                      <td>
                        <b>{shoe.color}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>가격</td>
                      <td>
                        <b>{shoe.price}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>구매수량</td>
                      <td>
                        {/* input 상자를 만들 때 값을 적절하게 입력할 수 있도록 설정해줘야한다.
                        <input type=" "> ""안의 타입을 바꿔서 입력값을 제어할 수 있다.
                        text : 아무거나 다 됨. password : 입력값이 안보임. number : 숫자만 가능 등등
                        text가 디폴트 타입.  
                        스크립트 코드를 작성해서 제어할 수 있다. */}
                        {/* <Form.Control
                          type="number"  // type을 넘버로 주기.
                          placeholder="주문 개수"
                          id="amount"
                          name="amount"
                          // 수량을 추적해야하기 때문에, value를 선언해서 amount 값 넣어주자.
                          value={amount}
                          // 입력값 변경을 위해 onChange 사용
                          onChange={(e) => setAmount(e.target.value)}
                        /> */}
                        {/* type을 지정하지 않아 text(기본타입)일 때 */}
                        <Form.Control
                          placeholder="주문 개수"
                          id="amount"
                          name="amount"
                          // 수량을 추적해야하기 때문에, value를 선언해서 amount 값 넣어주자.
                          value={amount}
                          // 입력값 변경을 위해 onChange 사용
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    // 수량이 0이면 경고창 띄우기.
                    if (amount == 0) {
                      alert("주문 개수를 확인해주세요.");
                      return; // 더이상의 작업을 하지 말고, 반환하도록 지시.
                    } // else 사용할 필요가 없다. amount가 0이면 바로 아래 if 문으로 넘어가야하기 때문.

                    if (window.confirm("장바구니로 이동하시겠습니까?")) {
                      dispatch(addCart({ shoe, amount })); // addCart로 shoe와 amount 보내기
                      navigate("/cart");
                    } else {
                      dispatch(addCart({ shoe, amount }));
                      return;
                    }
                  }}
                >
                  구매하기
                </Button>
              </Col>
            </Row>
          </div>
        ) : (
          <Row>
            <dir></dir>
            <dir></dir>
            <h2 className="my-5" align="center">
              상품번호를 확인해 주세요
            </h2>
          </Row>
        )}

        <dir></dir>
        <ProductNavTab />
      </Container>
    </>
  );
}

// 탭이 클릭될 때 보여줄 내용을 가지고 있는 컴포넌트
function TabContents({ tabs }) {
  if (tabs == 0) {
    return (
      // lorem으로 자동완성시킨다.
      <div>
        첫번째 탭 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum quisquam cumque consectetur modi eius libero voluptatem nobis nihil
        deserunt, nostrum blanditiis neque mollitia corrupti tempora ut
        recusandae ab dolorum optio.asdfasdf
      </div>
    );
  } else if (tabs == 1) {
    return (
      <div>
        두번째 탭 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum quisquam cumque consectetur modi eius libero voluptatem nobis nihil
        deserunt, nostrum blanditiis neque mollitia corrupti tempora ut
        recusandae ab dolorum optio.
      </div>
    );
  } else {
    return (
      <div>
        세번째 탭 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum quisquam cumque consectetur modi eius libero voluptatem nobis nihil
        deserunt, nostrum blanditiis neque mollitia corrupti tempora ut
        recusandae ab dolorum optio.
      </div>
    );
  }
}

// 상품 정보에 대한 부분
function ProductNavTab() {
  // 탭의 상태에 대한 변수. 0번이면 첫번째 탭, 1번이면 두번째 탭 ....
  const [tabs, setTab] = useState(0);

  const onClick = (e) => {
    let id = e.target.id;
    if (id == 0) {
      setTab(0);
    } else if (id == 1) {
      setTab(1);
    } else {
      setTab(2);
    }
  };

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={onClick} id={0}>
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={onClick} id={1}>
            후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={onClick} id={2}>
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabs={tabs} />
    </>
  );
}

export default Detail;
