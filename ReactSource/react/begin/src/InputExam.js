import { useState } from "react";

function InputExam() {
  const [text, setText] = useState("");

  return (
    <>
      {/* onChange : input text에 사용하는 이벤트명 */}
      {/* value 는 값을 가져다 쓸 수 있게 해줌. 입력받는 순간, 출력되게 함. */}
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={(e) => setText("")}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </>
  );
}

export default InputExam;
