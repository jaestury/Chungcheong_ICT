import "./Hello.css";

// if - else == 삼항연산자

function Hello2({ name, color, isSpecial }) {
  // if (isSpecial) {
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }

  // 삼항 연산자
  // JSX에서는 for, if를 사용할 수 없기 때문에 삼항연산자를 활용하면 좋다.
  // true 일 때 수행해야하는 동작이 많지 않다면 삼항 연산자 활용 가능.
  // console.log(isSpecial ? "true" : "false");

  return (
    <>
      <h1 style={{ color: color }}>
        {isSpecial ? "* " : null}
        {/* true나 false 값을 보내는 것이라면 default가 true다. */}
        안녕하세요 - {name}
      </h1>
    </>
  );
}

// props에 값이 안 넘어온 경우
Hello2.defaultProps = {
  name: "이름 없음",
};

export default Hello2;
