// 할 일 추가 버튼.

import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

// useState 사용
import { useRef, useState } from "react";

// redux 사용
import { useDispatch } from "react-redux";
// redux 함수 가져오기
import { createTodo } from "../store";

const CircleButton = styled.button`
  background: #38d9a9;
  // 마우스 올렸을 때 색상 변화
  &:hover {
    background: #63e6be;
  }
  // 기능 동작(클릭)할 때 색상 변화
  &:active {
    background: #20c997;
  }

  // 디자인 중첩이 될 때 무엇을 우선순위로 올릴지.
  // 숫자가 클수록 우선순위 높음
  z-index: 5;

  cursor: pointer; // 커서 손가락
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;

  // 위치 잡는게 쉽지 않다. 위치를 잡는데 사용한 코드
  // 단독으로는 사용되지 않지만, 부모와 함께 사용할 수 있다.
  position: absolute;
  left: 50%; // 왼쪽에서부터 50% 정도 왔을때
  bottom: 0px; // 아래에서 0px 떨어져서

  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }

      // 애니메이션 기능
      // rotate는 x각도로 기울이기. translate 움직임 정도?
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function Create() {
  // useState 사용
  const [open, setOpen] = useState(false);

  // onToggle 이란 함수 선언. setOpen 함수 사용시 open값 반대로 변경
  // open은 false기 때문에 true로 변경
  const onToggle = () => setOpen(!open);

  // useRef() : 변수, re렌더링 후에도 변경된 값을 유지.
  // 값이 변경되어도 re렌더링 되지 않고 데이터 값이 저장됨.
  // id 값 하나씩 증가.
  const nextId = useRef(5);

  // 새롭게 입력되는 todo 관리 useState 변수 선언
  const [value, setValue] = useState("");

  let dispatch = useDispatch();

  // 내용이 입력되고 엔터를 눌렀을 때 데이터가 value 라는 변수로 들어갈 수 있도록 만들어주기.
  // todo 입력 후 엔터 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    // todo 객체 생성
    const todo = { id: nextId.current, text: value, done: false };

    // reducers 함수 호출
    dispatch(createTodo(todo));

    // 다음 todo 입력을 위해 id 하나 증가
    nextId.current += 1;

    // 입력 완료 후 아이콘 원래대로
    setOpen(false);

    // 입력 후 작업 완료되면 입력창 비우기.
    setValue("");
  };

  return (
    <>
      {/* 인풋창 만들기. open이 참인 경우, 버튼을 클릭한 경우 인풋창 출력 */}
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력한 뒤 Enter을 누르세요"
              value={value}
              // 입력된 내용이 추가되도록 버튼 작업
              onChange={(e) => setValue(e.target.value)}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      {/* onClick 이벤트에 onToggle 함수 적용. */}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default Create;
