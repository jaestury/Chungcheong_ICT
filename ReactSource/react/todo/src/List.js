// 할 일 리스트 부모

import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  // 자신이 차지할 수 있는 영역 다 차지하기

  padding: 20px 30px;
  // 위,아래는 20. 왼,오른쪽 30
  padding-bottom: 48px;
  // 아래 48

  overflow-y: auto;
  // 스크롤이 나올 때 위, 아래 스크롤만 나오도록
  // 가로 방향의 스크롤은 나오지 않게 설정

  background: #f4fce3;
`;

function List() {
  return (
    <>
      <TodoListBlock>TodoList</TodoListBlock>
    </>
  );
}

export default List;
