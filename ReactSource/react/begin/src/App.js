// import "./App.css";
import Hello from "./Hello";

function App() {
  // 전통적 함수형태이지만, 함수의 개념은 아님.
  // 함수를 만드는 방식으로 component 를 생성한다.
  return (
    <>
      <h1>Start React!!</h1>
      <p>HTML 작성</p>
      <Hello name="홍길동" age="28" color="red"></Hello>
      <Hello age="30" color="blue"></Hello>
    </>
  );
}

export default App;
