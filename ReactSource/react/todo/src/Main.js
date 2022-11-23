// 리스트의 레이아웃 설정. 전체적인 디자인

import styled from "styled-components";

// Main의 디자인 설정해주기. styled-components는 상수 선언해서 적용
const TodoMainBlock = styled.div`
  width: 512px;
  height: 768px;
  background: white;
  // 흰색 직사각형 디자인 만들기
  // 폭 512px, 높이 768px

  margin: 0 auto;
  // 화면 중앙(가로)으로 오게 하기

  margin-top: 50px;
  margin-bottom: 32px;
  // 직사각형 외부 여백에 대한 설정
  // 위로는 50px, bottom 설정은 초기에는 크게 상관이 없음. 여유가 있기 때문.
  // 추후 데이터가 많이 추가돼서 스크롤이 내려가기 시작하면 그때서야 의미가 생김.

  border-radius: 16px;
  // 모서리 둥근 정도 지정

  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  // 그림자 설정
  // 앞 숫자(a b c d)는 시계방향으로 돌아간다
  // 뒤의 rgba(x, y, z, a)는 그림자의 정도
  // rgba 의 a는 alpha로 그림자의 강도.

  position: relative;
  display: flex;
  flex-direction: column;
  // 버튼 추가를 위한 작업
`;

// 하얀 박스 안에 다른 자식 컴포넌트를 배치할 것.
// 디자인을 외부에 지정하면 안에 들어올 컴포넌트가 출력되지 않기 때문에 미리 자리를 잡아놓는 것.
// 이때 children을 사용한다.
function Main({ children }) {
  return (
    <>
      <TodoMainBlock>{children}</TodoMainBlock>
    </>
  );
}

export default Main;
