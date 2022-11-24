// 장바구니
// 장바구니는 세션에 저장.
// 브라우저에서 사용자 컴퓨터에 저장하는 것은 세션.

import { Container, Table, Stack, Button } from "react-bootstrap";

// itemstore에서 함수 받아오기
import { addCount, subCart, subtractCount, addCart } from "../store/itemstor";

// 리덕스 사용하기. 데이터 기억하게 하기 위해서
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  // 기존 cart 정보 가져오기. 거기다 + 해야하니까
  // useSelector 로 state 사용.
  let allState = useSelector((state) => {
    return state;
  });

  // 변수 이중으로 선언?
  let carts = allState.carts;
  console.log(carts);

  // itemstore 함수 호출
  let dispatch = useDispatch();

  return (
    <>
      <Container className="table mt-5">
        <Table bordered>
          <thead>
            <tr>
              <th>번호</th>
              <th>상품명</th>
              <th>수량</th>
              <th>수량 변경하기</th>
              <th>취소</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {/* 기존 장바구니 보여주는 코드. map을 사용해서 배열을 돌리고 키 값도 제대로 넣음. */}
            {carts.map((cart, idx) => (
              <tr className="align-middle" key={idx}>
                <td>{idx + 1}</td>
                <td>{cart.pname}</td>
                <td>{cart.count}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button
                      variant="warning"
                      // onCllick 이용해 이벤트 생성하고, dispatch로 함수 가져와서 cart.id을 값으로 준다.
                      // 어떤 상품에 +,- 를 눌렀는지 cart.id로 구분.
                      onClick={() => dispatch(addCount(cart.id))}
                    >
                      +
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => dispatch(subtractCount(cart.id))}
                    >
                      -
                    </Button>
                  </Stack>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "해당 상품을 장바구니에서 삭제하시겠습니까?"
                        )
                      ) {
                        dispatch(subCart(cart.id));
                      }
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
