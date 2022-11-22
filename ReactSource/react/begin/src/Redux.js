// redux 사용하기
import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { changeAge, changeName } from "./store";
// changeName 함수 가져오기

function Redux() {
  let user = useSelector((state) => {
    // 저장된 모든 state를 user라는 이름으로 가져오기
    return state;
  });

  console.log(user);
  console.log(user.user);
  // user value 만 가져오기
  console.log(user.stock);
  // stock 만 가져오기

  // carts 에있는 정보 가져오기
  let carts = user.carts;

  // `dispatch()`를 이용해서 수정함수를 사용하는 컴포넌트에서 수정함수를 호출.
  // dispatch 라는 이름으로 사용할 수 있게 변수 선언
  let dispatch = useDispatch();

  return (
    <>
      <Container className="mt-4">
        <h1>
          Redux - {user.user.name} : {user.user.age}
          {/* 한번 더 들어가서 데이터를 뽑아내주자. */}
        </h1>
        <div>
          <Button variant="primary" onClick={() => dispatch(changeName())}>
            이름변경
          </Button>
          {/* 수정함수에서 임의로 나이를 변경하고자 할 때
          <Button variant="danger" onClick={() => dispatch(changeAge())}>
            나이변경
          </Button> */}
          <Button variant="danger" onClick={() => dispatch(changeAge(100))}>
            나이변경
          </Button>
        </div>
        {/* Button 생성 후 onClick 이벤트 걸어주기 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {/* map으로 배열 복사해서 반복문 돌리기 */}
            {carts.map((carts, idx) => (
              <tr key={idx}>
                <td>{carts.id}</td>
                <td>{carts.name}</td>
                <td>{carts.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Redux;
