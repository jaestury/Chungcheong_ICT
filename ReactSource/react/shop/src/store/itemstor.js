import { configureStore, createSlice } from "@reduxjs/toolkit";

let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 1067, pname: "White and Black", count: 2 },
    { id: 1068, pname: "Gray Yordan", count: 1 },
  ],
  reducers: {
    // 함수 생성
    // 수량 추가
    addCount(state, action) {
      // 특정 상품의 count=count+1. 어떤 제품의 +를 눌렀는지 알아야함.

      // payload 사용해서 사용자가 선택한 상품의 id 가져오기
      let id = action.payload;

      // 아이디를 이용해 특정 상품 찾기. cart.id 가 id 와 같은 것.
      let product = state.find((cart) => cart.id == id);

      // 특정 상품 갯수 증가
      product.count += 1;
    },
    // 수량 감소
    subtractCount(state, action) {
      // addCount 와 구조는 동일. count 를 하나씨 감소시켜주는 것이 다르다.
      let id = action.payload;
      let product = state.find((cart) => cart.id == id);
      product.count -= 1;
    },

    // 제품 추가
    addCart(state, action) {
      // 데이터 두개가 넘어온다. shoe, amount.
      // 넘어온 상품 정보 가져오기
      let product = action.payload.shoe;

      // 구입 개수 가져오기
      let amount = action.payload.amount;

      // 새 변수 item 선언해서 상품 정보 넣어주기.
      let item = {
        id: product.id,
        pname: product.pname,
        count: Number(amount),
      };

      // state에 push로 item 넣어주기
      state.push(item);
    },
    // 제품 삭제
    subCart(state, action) {
      // 삭제를 선택한 상품 아이디 가져오기
      // 배열 index 찾기. 해당 item 과 일치한 인덱스를 찾는 코드.
      let deleteProduct = state.findIndex((item) => item.id == action.payload);
      // 배열 삭제. 하나만.
      state.splice(deleteProduct, 1);
    },
  },
});

// 함수 내보내기
export let { addCount, subtractCount, addCart, subCart } = carts.actions;

export default configureStore({
  reducer: {
    carts: carts.reducer,
  },
});
