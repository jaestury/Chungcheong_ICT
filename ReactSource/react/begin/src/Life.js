// useEffct 사용해보기
import { useEffect, useState } from "react";

function Life() {
  // 자동실행 - 컴포넌트 라이프 사이클에 의해 동작
  // useEffect(() => {
  //   마운트(처음 나타났을 때)되는 시점, 업데이트 되는 시점에 실행할 코드

  //   return () => {
  //     언마운트 되는 시점에 싫행할 코드
  //   }
  // }, [third]);
  // [] : deps(생략할 경우) : 마운트, 업데이트 시점에 항상 실행됨.
  // [변수] : state에서 관리하는 변수하는 변수를 넣어서 해당 변수가 업데이트되는 시점에 코드 수행

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  // 동작방식 : 동기/비동기 방식
  // 동기방식 : 일반적인 웹 개발 방식. 요청을 보내고 응답이 올때까지 기다림.
  // 비동기방식 : ajax. 요청을 보내고 응답을 기다리지 않음
  // 비동기개발 방식이 많이 늘어나고 있음.

  // 비동기 함수 :
  // 코드 실행을 기다리지 않고 다음 코드를 실행하러 감.
  // 브라우저가 코드 로직을 기억해두고 있다가 조건이 맞으면 실행시킴.

  useEffect(() => {
    console.log("useEffect! 마운트");

    // 1초가 지난 후 alert() 창 띄워주기
    const timeout = setTimeout(() => {
      alert("안녕하세요");
    }, 1000);

    return () => {
      console.log("useEffect! 언마운트");
      // 타이머 제거 코드를 언마운트 때 많이 삽입
      clearTimeout(timeout);
    };
  }, [count, flag]);
  // 어떤 변수가 업데이트 될 때 실행해줘야하는지 넣어주기.

  return (
    <>
      <dir>컴포넌트 라이프 사이클 : {count}</dir>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
}

export default Life;
