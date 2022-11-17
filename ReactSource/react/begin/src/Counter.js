// state : 변수 저장 방법
// state에 저장된 변수는 화면 UI 변경과 관련이 있다. 일반 변수와 다르다.
// 일반 변수는 화면 UI를 변경하거나 하지는 않는다.
// re랜더링 하는 기준. 달라진 것을 리액트가 알 수 있도록 해줘야지 리액트가 re랜더링 해준다.
// 일반 변수 사용하던 방식으로 하면, 화면 UI는 변경되지 않는다.
import { useState } from "react";
// import 를 추가해주어야 한다.

function Counter() {
  //이렇게 선언하는 변수는 일반 변수. 화면 UI에 영향을 주지 않음.
  //   let count = 0;

  // state 변수 선언
  // useState() : 초기값, 함수 리턴
  //   console.log("Counter", useState(0));

  // 사용한 변수로 세팅해준다.
  // useState() 괄호 안에는 초기값 삽입.

  // 배열 구조 분해 할당을 할 수 있다. 초기값은 count에, 함수는 setCount에 할당.
  const [count, setCount] = useState(0);

  const increase = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  };
  const decrease = () => {
    // count = count - 1;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      {/* 버튼 클릭시 이벤트 핸들러 지정 */}
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}

export default Counter;
