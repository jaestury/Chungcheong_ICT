import "./Content.css";
import { useState } from "react";
import Modal from "./Modal";

function Content3() {
  // 화면에 보여줄 게시물을 배열로 생성하기.
  const articles = [
    { id: 0, title: "React 개발환경 설정", regedate: "2022-11-16" },
    { id: 1, title: "React 기본 문법", regedate: "2022-11-17" },
    { id: 2, title: "React Props", regedate: "2022-11-17" },
    { id: 3, title: "React state", regedate: "2022-11-17" },
  ];

  // 좋아요에 대한 useState
  const [like, setLike] = useState(Array(articles.length).fill(0));
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

    const id = Number(e.target.id); // like["0"] + 1 => like[0] + 1

    const newLike = [...like]; // like = [0,0] => newLike 새로운 배열로 복사.

    newLike[id] = newLike[id] + 1; // [0,0] ==> [1,0]

    setLike(newLike); // setLike 를 사용해서 원본배열을 복사 배열로 교체.
  };

  return (
    <>
      <div className="top-nav">
        <h1>My React App</h1>
      </div>
      <article>
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3 onClick={displayModal}>{article.title}</h3>
            <h3>
              <span onClick={increase} id={article.id}>
                👍
              </span>
              {like[article.id]}
            </h3>
            <p>{article.regedate}</p>
          </div>
        ))}
      </article>
      {/* modal 변수의 값이 true 라면 Modal 컴포넌트 보여주고, false라면 null */}
      {modal ? <Modal /> : null}
    </>
  );
}

export default Content3;
