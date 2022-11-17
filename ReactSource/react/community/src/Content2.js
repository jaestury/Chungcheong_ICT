import "./Content.css";
import { useState } from "react";
import Modal from "./Modal";

function Content2() {
  // 처리해야 하는 좋아요가 많아지는 경우 좋지 못한 코드가 된다.
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // 좋아요에 대한 useState
  const [like, setLike] = useState([0, 0, 0, 0]);
  // console.log("like", like);

  // modal state (처음엔 안보였다가 글을 클릭하면 모달 창 보이게 만들기)
  const [modal, setModal] = useState(false);

  const displayModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const increase = (e) => {
    // e : 이벤트 대상
    // e.target : 이벤트가 일어난 요소를 가져올 수 있음
    console.log(e.target);
    console.log(e.target.id);
    console.log(typeof e.target.id); // "0" string

    // if (e.target.id == 0) {  // "0" === 0 (false) "0" == 0 (true)
    //   setLike(like[0] + 1);
    // } else if (e.target.id == 1) {
    //   setLike(like[1] + 1);
    // } else if (e.target.id == 2) {
    //   setLike(like[2] + 1);
    // }

    const id = Number(e.target.id); // like["0"] + 1 => like[0] + 1

    const newLike = [...like]; // like = [0,0] => newLike 새로운 배열로 복사.
    // ...like 는 깊은 복사. 원본과 참조를 끊어내는 완전 새로운 배열.
    // 리액트에서는 원본배열을 직접 건드리는 것은 금기시 됨.
    // 복사를 떠놓는다.

    newLike[id] = newLike[id] + 1; // [0,0] ==> [1,0]

    setLike(newLike); // setLike 를 사용해서 원본배열을 복사 배열로 교체.
  };

  return (
    <>
      <div className="top-nav">
        <h1>My React App</h1>
      </div>
      <article>
        <div className="article">
          <h3 onClick={displayModal}>React 개발환경 설정</h3>
          <h3>
            {/* <span onClick={() => setLike1(like1 + 1)}>👍</span> {like1} */}
            <span onClick={increase} id="0">
              👍
            </span>{" "}
            {like[0]}
          </h3>
          <p>2022-11-16</p>
        </div>
        <div className="article">
          <h3 onClick={displayModal}>React 기본 문법</h3>
          <h3>
            {/* <span onClick={() => setLike2(like2 + 1)}>👍</span> {like2} */}
            <span onClick={increase} id="1">
              👍
            </span>{" "}
            {like[1]}
          </h3>
          <p>2022-11-17</p>
        </div>
        <div className="article">
          <h3 onClick={displayModal}>React Props</h3>
          <h3>
            <span onClick={increase} id="2">
              👍
            </span>{" "}
            {like[2]}
          </h3>
          <p>2022-11-17</p>
        </div>
        <div className="article">
          <h3 onClick={displayModal}>React state</h3>
          <h3>
            <span onClick={increase} id="3">
              👍
            </span>{" "}
            {like[3]}
          </h3>
          <p>2022-11-17</p>
        </div>
      </article>
      {/* modal 변수의 값이 true 라면 Modal 컴포넌트 보여주고, false라면 null */}
      {modal ? <Modal /> : null};
    </>
  );
}

export default Content2;
