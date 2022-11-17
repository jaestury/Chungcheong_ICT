import "./Content.css";
import { useState } from "react";

// state 사용
// 버튼을 누르면 항목이 번갈아서 나오게 하고 싶다.
function Content() {
  // let flag = true; // => flag 값 변화에 따라 UI가 변경되어야 하는데 일반 변수로는 안됨.

  const [flag, setFlag] = useState(true);

  let posts = null;

  const change = (e) => {
    setFlag(!flag); // ! : not (not true : false 결과. not false : true 결과)
    // useState는 set 함수를 사용해야한다.

    // 삼항 연산. flag가 true 면 false로 바꾸고, 아니면 true로 변경하는 조건식.
    // flag = flag ? false : true;
    console.log(flag);
  };

  // 안에 있으면 flag 값의 변화를 적용받지 못한다.
  // 밖에 있어야 flag 값의 변화를 적용받아 원하는 코드가 작동한다.
  if (flag) {
    posts = (
      <div className="article">
        <h3>React 개발환경 설정</h3>
        <p>2022-11-16</p>
      </div>
    );
  } else {
    posts = (
      <div className="article">
        <h3>React 기본 문법</h3>
        <p>2022-11-17</p>
      </div>
    );
  }

  return (
    <>
      <div className="top-nav">
        {/* css 사용은 className을 붙인다. */}
        <h1>My React App</h1>
      </div>
      <article>{posts}</article>
      <button onClick={change}>change</button>
    </>
  );
}

export default Content;
