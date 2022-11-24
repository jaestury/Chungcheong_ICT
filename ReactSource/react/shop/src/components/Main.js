import "./Main.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Main({ shoes, setShoes }) {
  console.log("Main", shoes);

  // navigate 변수 선언. 데이터를 유지하며 링크를 탈 수 있게 useNavigate를 사용하자.
  let navigate = useNavigate();

  // 버튼 횟수 관리하는 변수 생성. state 사용. 화면에 영향을 주는 변수이기 때문.
  const [count, setCount] = useState(0);

  // 로딩 관리
  const [isLoading, setLoading] = useState(false);

  // 더보기 버튼 구현하기
  // github.io 에 옮려놓은 자료 참조해서 만들어보자
  // 버튼이 클릭되면 http://jaestury.github.io/product.json 데이터 가져오기
  // ajax() ==> axios
  let getProduct = () => {
    // 버튼이 클릭되면 +1 하기.
    setCount(count + 1);

    // 버튼이 클릭되면 로딩중이라는 메시지 보여주기. true 사용.
    // getProduct 작업이 시작되면 setLoading의 상태를 true로 변경. + getProduct 작업이란 데이터 가져오는 작업.
    // 즉 getProduct 작업중인 상태, 즉 데이터를 불러오는 상태는 setLoading이 true 가 됨.
    setLoading(true);

    // 새로운 url 변수 선언
    let url = "";

    // count 가 0, 즉 더보기 처음 누르면 1번째 product 가져오기
    if (count === 0) {
      url = "https://jaestury.github.io/product.json";

      // count 가 1, 즉 더보기 두번째 누른거면 2번째 product 가져오기
    } else if (count === 1) {
      url = "https://jaestury.github.io/product2.json";

      // count 가 2, 더보기 세번째 누른거면 product 데이터가 없기 때문에 오류 반환하기
    } else {
      alert("더 이상 가져올 제품이 없습니다.");
      return;
    }

    //  axios.get(정보를 가져올 주소 작성).then(데이터가 성공적으로 도착한 뒤 해야할 작업)
    // .catch(실패했을 때 해야할 작업 작성);
    axios
      // url을 담는 변수인 'url'을 입력값으로 넣어준다.
      .get(url)
      // 도착한 데이터 response 라는 변수로 정의하고, 로그 찍어보기
      .then((response) => {
        // console.log(response); // 데이터 전체 받기

        console.log(response.data); // 제품 데이터만 받기

        // reponse에 data가 존재한다면 setShoes를 통해 원본 데이터 변경
        // 데이터가 하나라도 들어있으면 true로 인식함.
        if (response.data) {
          // 원본데이터는 직접 수정 불가능하기 때문에, 복사를 해야한다.
          // shoes, response.data 두 배열 모두 복사
          let newArr = [...shoes, ...response.data];

          // setShoes 함수를 이용해서 복사되고 합쳐진 newArr 배열을 Main에 넣어준다
          setShoes(newArr);
        }
        setLoading(false); // 데이터 가져오는 작업 끝나면 false로 변경
      })
      // 오류가 발생하는 상황 처리
      .catch(() => {
        console.log("에러 발생");
        setLoading(false); // 데이터 가져오다 에러 발생하면 false로 변경
      });
  };

  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        {/* 양쪽 여백 className="mx-3" */}
        <Row className="mx-3">
          {/* map 사용해서 배열 복사하고 
          그 배열을 돌려서 각 항목에 맞춰 출력. */}
          {shoes.map((shoes) => (
            <Col key={shoes.id} md={3} className="mt-3">
              {/* key 값은 중복되지 않는 id값으로 사용한다. */}
              <div>
                <img
                  src={shoes.src} // 이미지
                  alt={shoes.alt} // 상품분류
                  className="img-fluid d-block"
                />
                <div className="px-5 h5">
                  <p>
                    {/* 상품명(링크) 상품명을 클릭하면 상품상세 페이지 Detail록 넘어가도록 설정 
                    "localhost:3000/detail/제품id" 경로로 연결됨
                    경로에 속한 제품 id 는 사용자가 어떤 제품을 클릭하게 하는지 알게 하는 의미있는 값이며 이 값을 추출해서 사용하자. */}
                    {/* <a href={"/detail/" + shoes.id}>{shoes.pname}</a> */}

                    {/* a태그로 링크를 타면 데이터가 새로고침 되어버린다. Link나 useNavigate를 사용해서 데이터를 유지시켜보자.*/}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/detail/" + shoes.id);
                      }}
                    >
                      {shoes.pname}
                    </a>
                  </p>
                  <p>색상 : {shoes.color}</p>
                  <p>가격 : {shoes.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-3">
          {/* onClick으로 이벤트 작성해서 axios 데이터 가져오기 */}
          <Button variant="outline-secondary" onClick={getProduct}>
            {/* 'isLoading' state 변수를 사용해 로딩을 표현하자. */}
            {isLoading ? "Loading..." : "더보기.."}
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Main;
