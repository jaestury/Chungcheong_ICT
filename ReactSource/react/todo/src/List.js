// 할 일 리스트 부모

import styled from "styled-components";
import Item from "./Item";
import Create from "./Create";

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

  background: white;

  // List가 아래쪽 영역 최대한 많은 공간을 차지하기 때문에
  // 아래쪽 모서리 둥근 정도를 List에서 지정해주어야한다.
  border-radius: 16px;
`;

function List() {
  return (
    <>
      <TodoListBlock>
        {/* Item에 데이터 넘기기. props 개념 */}
        <Item text="리액트 프로젝트 구상" done={true}></Item>
        <Item text="프로젝트 개발환경 구축" done={false}></Item>
        <Item text="프로젝트 생성" done={false}></Item>
        <Item text="기본 페이지 작성" done={false}></Item>
      </TodoListBlock>
      <Create></Create>
    </>
  );
}

export default List;
