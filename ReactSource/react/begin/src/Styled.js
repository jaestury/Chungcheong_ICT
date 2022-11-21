// styled components 예제
import styled from "styled-components";

function Styled() {
  const Button = styled.button`
    background: palevioletred;
    border-radius: 5px;
    border: none;
    color: white;
  `;

  const TomatoButton = styled(Button)`
    // 상속
    background: tomato;
  `;

  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
    </>
  );
}
export default Styled;
