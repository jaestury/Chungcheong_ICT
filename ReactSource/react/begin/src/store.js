// redux 사용을 위한 저장소
// component가 아니기 때문에 소문자로 시작하지만, 컴포넌트 생성할 때는 대문자로 하자.

import { configureStore, createSlice } from "@reduxjs/toolkit";

// 공유할 state 저장
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 25 },

  // 수정함수 생성. state 가 이동하기 때문에 state 로 받도록 한다.
  reducers: {
    changeName(state) {
      // 문자열 하나만 있을 때 사용
      // string 단일이면 문제없이 사용 가능하다.
      // return "john " + name;

      // 데이터가 객체형태로 바뀌면서 문제가 생겼다.
      // 데이터가 object 상태라면 return을 사용하지 않고, 직접 수정이 가능하다.
      state.name = "John " + state.name;
    },
    changeAge(state, action) {
      // 현재 나이에서 +1
      // state 값으로 넘겨받은 age 에 +1 해주기
      // state.age += 1;

      // 사용자 보내는 숫자로 나이를 변경하자\
      // action 키워드 사용. 넘기는 값은 payload 로 가져온다. 정해져 있음!
      // 구체적으로는 dispatch(changeAge(100) 괄호 안의 값을 payload 로 받게된다.
      state.age += action.payload;
    },
  },
});

// 배열로 실험
let stock = createSlice({
  name: "stock",
  initialState: [10, 20, 30],
});

// 객체 배열로 실험
let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 0, name: "Black and White", count: 2 },
    { id: 2, name: "Ogangkidesuka", count: 5 },
    { id: 3, name: "Gray man", count: 1 },
  ],
});

// 수정함수 내보내기
export let { changeName, changeAge } = user.actions;

// 저장된 state 내보내기
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    carts: carts.reducer,
  },
});
