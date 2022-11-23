// 실제 할 일 목록

import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

// 왼쪽 체크박스 스타일
const CheckCircle = styled.div`
  // 네모상자
  width: 32px;
  height: 32px;
  // 둥근 정도를 반을 줌으로써 동그라미로 만듬.
  border-radius: 16px;

  border: 1px solid #adb5bd;

  // 그냥은 글자가 작기 때문에 글자 크기 설정.
  font-size: 24px;

  // 정렬과 관련
  align-items: center;
  justify-content: center;

  // 체크박스 오른쪽 여백
  margin-right: 20px;

  // 마우스 올리면 포인터가 손모양이 되도록
  cursor: pointer;

  // 일이 완료되면(done) css를 연하게 표기하기
  // props 로 처리한다.
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #e8d9a9;
      color: #adb5bd;
    `};
`;

// todo 텍스트 스타일
const Text = styled.div`
  // 하나의 행에 나타내는 것. 동그라미+텍스트+휴지통
  // flex를 1로 주면 그 항목이 가능한 많은 자리를 차지한다.
  // 나머지 항목들은 남은 공간을 나눠서 사용하게 된다.
  flex: 1;
  font-size: 21px;
  color: #212529;
  ${(props) =>
    props.done &&
    css`
      color: #adb5bd;
    `}
`;

// todo 휴지통 스타일
const Remove = styled.div`
  // 처음에는 안보이도록. 투명도 설정
  opacityy: 0;

  // 주어진 공간에 펼쳐주기
  display: flex;

  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  // 마우스가 올라가면 색이 바뀌도록
  &:hover {
    color: #ff6b6b;
  }
`;

// todo 목록 스타일
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  // 마우스를 올리면
  &:hover {
    // Remove 변수가
    ${Remove} {
      // 보이도록 만든다.
      opacity: 1;
    }
  }
`;

// List 에서 주는 데이터를 props 받아서 사용할 수 있음.
// 데이터 나눠서 받아주기
function Item({ id, text, done }) {
  return (
    // TodoItemBlock 안에 데이터 넣어주기.
    <TodoItemBlock>
      {/* 체크박스는 done값(완료/미처리)을 가져야하기 때문에 done과
      완료 체크 아이콘 사용 */}
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>

      {/* Text는 완료처리 시 색이 변경되어야 하니까 done 값을 가짐 */}
      <Text done={done}>{text}</Text>

      {/* Remove는 휴지통 아이콘 사용 */}
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default Item;
