// styled components 예제
import styled, { css } from "styled-components";

// <button>~~~</ button>

function Styled() {
  const Button = styled.button`
    // background: palevioletred;
    // props로 정의해서 색상 넣기. 세미콜론 빠뜨리지 않도록 주의!
    background: ${(props) => props.bg};

    // color : 글자색. 3항연산자. orange일때만 글자 흰색하고, 나머지 검정색으로 하기.
    color: ${(props) => (props.bg == "orange" ? "white" : "black")};
    border-radius: 3px;
    border: none;
    // color: white;
  `;
  // Button의 스타일 정의
  const TomatoButton = styled(Button)`
    background: orange;
  `;
  // Button을 상속받아서 background 성질만 바꿔준다.

  // div 스타일 지정
  const Div = styled.div`
    background: gray;
    padding: 20px;
  `;

  // 동그라미
  const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || "pink"};
    // props 사용해서 다양한 색 사용하기.
    border-radius: 50%;
    // props 특정 조건에 따라 추가로 css 적용
    ${(props) =>
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  `;

  return (
    <>
      <Circle></Circle>
      <Circle color="yellow"></Circle>
      <Circle color="violet" huge></Circle>
      <Circle color="black"></Circle>
      <Button bg="palevioletred">I'm purple.</Button>
      <br />
      <Div>
        <Button bg="orange">I'm orange.</Button>
        <p>I'm KING of World</p>
      </Div>
      {/* 리액트에서 컴포넌트를 불러다 쓰는 것처럼 사용하면 된다. 자바 스크립트 코드를 쓸 수 있다.*/}
      <br />
      <TomatoButton>I'm red.</TomatoButton>
    </>
  );
}
export default Styled;
