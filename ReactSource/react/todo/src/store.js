// 리덕스 스토어 생성

import { configureStore, createSlice } from "@reduxjs/toolkit";

// 저장소에 저장할 데이터
// state 를 저장하는 저장소이기 때문에, State로 표기.
let todos = createSlice({
  name: "todos",
  initialState: [
    // 객체 형태로 변환해서 배열을 넣자.
    { id: 1, text: "리액트 프로젝트 구상", done: true },
    { id: 2, text: "프로젝트 개발환경 구축", done: false },
    { id: 3, text: "프로젝트 생성", done: false },
    { id: 4, text: "기본 페이지 작성", done: false },
  ],

  reducers: {
    // 함수 만들 때 첫번째 인자는 무조건 state. 두번째는 action

    removeTodo(state, action) {
      // 수정 기능을 갖는 함수를 만들자
      // 넘어온 id을 필터로 거르고, 나머지 id에 해당하는 값 리턴하기.
      // 넘어온 id 값에 해당하는 항목 삭제.
      return state.filter((todo) => todo.id !== action.payload);
    },
    doneToggle(state, action) {
      // 체크하면 done 값이 true로 변하는 함수 만들기.
      // 넘어온 id 값의 done 상태 확인 후 현재 상테에서 반대로 바꿔주기.
      // 리액트는 직접 수정을 허용하지 않기 때문에, 복사 후 수정해주어야 함.
      // todo 루프를 돌리고, map을 이용해서 새로운 배열을 만들자.
      // id를 가져와서, (3항 연산 사용) 사용자가 선택한 id와 일치한다면 done의 상태를 반대로 바꿔주고,
      // 일치하지 않는다면 그냥 todo로 반환.
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    createTodo(state, action) {
      // 새로운 할 일 추가
      // 기존 배열에 concat 으로 붙이기.
      return state.concat(action.payload);
    },
  },
});

// 저장 데이터 만들었다면, 외부에서 사용 가능하도록
// reducer 을 통해 내보내주기.
export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

// 외부에서 사용할 수 있도록 함수 내보내기
export let { removeTodo, doneToggle, createTodo } = todos.actions;
