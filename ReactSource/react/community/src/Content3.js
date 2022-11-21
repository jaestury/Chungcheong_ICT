import "./Content.css";
import { useState } from "react";
import Modal from "./Modal";

function Content3() {
  // 화면에 보여줄 게시물을 배열로 생성하기.
  // 실제로도 데이터는 배열의 형태를 갖는 객체로 입력되는 경우가 많다고 한다.
  const articleList = [
    { id: 0, title: "React 개발환경 설정", regedate: "2022-11-16" },
    { id: 1, title: "React 기본 문법", regedate: "2022-11-17" },
    { id: 2, title: "React Props", regedate: "2022-11-17" },
    { id: 3, title: "React state", regedate: "2022-11-17" },
    // id를 인덱스로 사용할 수 있다. article id
  ];

  // modal state (처음엔 안보였다가 글을 클릭하면 모달 창 보이게 만들기)
  const [modal, setModal] = useState(false);

  // 사용자가 선택한 게시물 아이디 state.
  // 게시물을 선택하면 게시물에 해당하는 id가 반환되도록 하는 state
  const [target, setTarget] = useState(0);

  // title state
  const [title, setTitle] = useState("");

  // articles state
  // 선언 위치도 중요하다. 코드는 항상 위 > 아래로 실행되기 때문에.
  const [articles, setArticles] = useState(articleList);

  // 좋아요에 대한 useState
  // useState(Array(articles.length).fill(0)) ==> [0,0,0,0,....]
  const [like, setLike] = useState(Array(articles.length).fill(0));
  // console.log("like", like);

  const change = (e) => {
    // console.log(e);
    setTitle(e.target.value);
  };

  const create = (e) => {
    // 오늘 날짜 가져오기
    const todayString = new Date();
    // 년, 월, 일만 추출
    // + 월이나 일 한자리인 경우 자리값 일정하게 맞추기 위해 앞에 0 붙이기.
    let year = todayString.getFullYear();
    // const month = todayString.getMonth() + 1;
    // const는 상수이기 때문에 에러가 발생한다. let으로 변경해주자.
    let month = todayString.getMonth() + 1;
    let date = todayString.getDate();

    month = month > 9 ? month : "0" + month; // 이 구문에서 에러가 발생한다. 이유
    date = date > 9 ? date : "0" + date;

    // 윗 줄 실행 완료 > year 2022, month 11, date 18

    const today = year + "-" + month + "-" + date;

    // - 로 연결한다. 2022-11-18 출력됨.

    // 배열에 정보 추가하려면
    // { id: 0, title: "React 개발환경 설정", regedate: "2022-11-16" }
    // 위와 같은 배열의 형식으로 추가되어야 한다.
    const newArticles = {
      id: articles.length - 1,
      title,
      regedate: today,
    };

    // 기존 배열 변경 : setArticles 사용
    // 원본 직접 수정 불가 : 원본을 복사한 후 변경하도록 한다.
    // 새로운 배열(글)을 기존 배열의 뒤에다가 push해서 추가한다.
    // setArticles([...articles, newArticles]); // 원본 복사하고 새 배열 추가
    setArticles(articles.concat(newArticles)); // 원본에 concat으로 새 배열 추가
    // 새 글 추가 완료 후 좋아요 수 변경
    setLike([...like, 0]);
    // 새 글 추가 완료 후 좋아요 수 변경
    setTitle("");
  };

  const displayModal = (e) => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }

    // console.log("이벤트 대상", e.target);
    // 이벤트 대상을 확인해본 결과 id가 포함되지 않았다. id를 포함시켜주자.
    // value 값을 사용하기 위해서는 id가 제일 좋다!

    setTarget(e.target.id);
    // console.log("변경된 target", target);
  };

  const increase = (e) => {
    // e : 이벤트 대상
    // e.target : 이벤트가 일어난 요소를 가져올 수 있음
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(typeof e.target.id); // "0" string

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
            <h3 onClick={displayModal} id={article.id}>
              {article.title}
            </h3>
            <h3>
              <span onClick={increase} id={article.id}>
                👍
              </span>
              {like[article.id]}
            </h3>
            <p>{article.regedate}</p>
            <p>
              <button
                onClick={(e) => {
                  // 원래 버튼이 가지고 있는 기본 동작 중지.
                  e.preventDefault();

                  // state 작업이 필요하니까 setArticles 사용.
                  setArticles(
                    // filter : 조건에 안 맞는거 빼고, 조건에 맞는 것만 반환. 배열 조작.
                    // 클릭한 게시물(예시 1번 게시물) 빼고 나머지 게시물 노출시키는 코드
                    articles.filter((article1) => article1.id != article.id)
                  );
                }}
              >
                삭제
              </button>
              {/* 필터만 걸어주면 된다. */}
            </p>
          </div>
        ))}
      </article>

      {/* 새 글 작성 
      1. 기존 배열에 새 글에 대한 정보 추가 
      > 배열 변경이 일어나면 화면 UI도 변경되어야 함. > state 사용 
       */}
      <div>
        <input type="text" onChange={change} value={title} />
        <button onClick={create}>새 글 작성</button>
        {/* Uncaught TypeError: Assignment to constant variable
         */}
      </div>

      {/* modal 변수의 값이 true 라면 Modal 컴포넌트 보여주고, false라면 null */}
      {modal ? <Modal choiceArticle={articles[target]}></Modal> : null}
      {/* articel의 id를 Modal 측으로 넘기는데, state로 처리해서 넘기도록 하자. 
      화면이 변경되어야하기 때문에. */}
      {/* 배열 안에 target을 넣자. target이 id를 가져와준다. */}
    </>
  );
}

export default Content3;
