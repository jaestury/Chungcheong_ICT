import { useState, useRef } from "react";

// useRef() : 특정 DOM 선택할 때, 변수 값이 변경된다 해도 re렌더링을 하지 않는다.(참고만 할 때)

function InputExam3() {
  // input이 여러개일때
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  }); // 구조분해할당
  const { name, nickname } = inputs;

  const nameInput = useRef();
  // nameInput 이라는 useRef 훅 선언. import에 쓴다고 알려주자.
  // useRef() 변수ㅇ

  const onChange = (e) => {
    // 어느 input에서 이벤트가 호출되었는가? name? nickname인가?
    // console.log(e.target);

    // 입력값과 요소의 이름 가져오기. value : 입력값
    const { value, name } = e.target;

    // console.log(value, ":", name);
    // 어디서 이벤트 호출됐는지 알아보기
    setInputs({
      // 기존 값을 직접 수정하는것은 상관 없음. (객체(배열))
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    // name, nickname 둘 다 초기화해야 한다.
    // 코딩하기 전에 한글로 목표를 구체화하기. 어떤 기능을 구현할건지? 어떻게 구현할건지?
    // setInputs 이용해서 onReset 사용되면 name과 nickname 값을 비우도록 함.
    setInputs({
      name: "",
      nickname: "",
    });

    nameInput.current.focus();
    // 커서를 계속 깜빡이게 하는 기능 : focus()
    // 현재 상태로 가져오기 위해서는, ref에 .current 로 가져와야 된다.
    // 특정 요소에 useRef를 붙이고, 이를 이용해서 원하는 지점에 focus() 를 줄 수 있다.
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="이름"
          name="name"
          onChange={onChange}
          value={name}
          // input의 값을 name과 맞춤으로써 입력값이 사라질 때 같이 사라지게 한다.
          ref={nameInput}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          onChange={onChange}
          value={nickname}
        />
      </div>

      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          입력 값 : {name} : {nickname}
        </b>
      </div>
    </>
  );
}

export default InputExam3;
