import "./Hello.css";

// function Hello(props) {
function Hello({ name, age }) {
  // JSX 문법.
  // 보여줄 태그가 2개 이상이라면, 부모 태그가 필요하다.
  // 부모 태그(아무 태그나)로 감싸서 해결 가능하다..
  // 태그는 무조건 쌍으로 작성해야한다. (여는 태그-닫는 태그)
  // 스크립트 변수를 사용할 때는 { } 안에 넣어 사용하면 된다.
  // 스크립트 객체 역시 { } 안에 넣어 사용하면 된다.
  // css 파일로 적용된 디자인을 사용하려면 className 키워드 사용.
  // return 문 안에서의 주석 : {/* ~~ */} 안에 들어감.
  // 태그에 직접 스타일 지정 가능한데 {{ }} 로 사용함.
  // css에서 -로 연결된 단어들은 JSX에서는 카멜케이스로 사용함.

  // 변수 선언
  // let name = "react";

  // 객체 선언
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "24px",
    padding: "1rem",
  };

  return (
    <>
      <h1>안녕하세요!</h1>
      <h2>안녕히계세요</h2>
      <p>반갑습니다</p>
      <br />
      {/* <p style={style}>
        {props.name} = {props.age}
      </p> */}
      <p style={style}>
        {name} = {age}
      </p>
      {/* 원래 (html과 css를 따로 쓰는) 개발 방식 : <div class="gray-box"> */}
      <div className="gray-box"></div>
      <div
        style={{
          color: "yellow",
          background: "blue",
          width: 300,
          fontSize: 20,
        }}
      >
        JSX 스타일 문법
      </div>
    </>
  );
}

// props에 값이 안 넘어온 경우
Hello.defaultProps = {
  name: "이름 없음",
  age: "알 수 없음",
};

export default Hello;
