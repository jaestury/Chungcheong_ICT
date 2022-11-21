import { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App4() {
  // input state
  const [inputs, setIntputs] = useState({
    username: "",
    email: "",
  });

  // users state
  // 원본 데이터(전체리스트)는 부모가 갖고 있어야한다. state 로 관리하자.
  // 배열에 새로운 내용이 추가될 수 있기 때문.
  const [users, setUsers] = useState([
    { id: 1, username: "velocity", email: "velocity@gmail.com", active: true },
    { id: 2, username: "eclipse", email: "eclipse@gmail.com", active: false },
    { id: 3, username: "tiger", email: "tiger@gmail.com", active: false },
  ]);

  // input 값 변화에 따라 동작하는 inputs 함수
  const { username, email } = inputs;
  const onChange = (e) => {
    // 어느 input에서 왔는지 확인
    const { name, value } = e.target;

    setIntputs({
      ...inputs, // 복사본
      [name]: value,
    });
  };

  // id 값 관리
  // useRef() 는 참고형 변수. 하지만 re렌더링 시 초기화 되지 않는다.
  const nextId = useRef(4);

  // user 등록 함수
  const onCreate = (e) => {
    // 회원 등록 { id: 1, username: "velocity", email: "velocity@gmail.com" },
    // 새로 등록할 유저 객체 생성
    const user = {
      id: nextId.current,
      // nextId.current = useRef()를 사용해서 Id의 숫자를 자동 증가시킨다.
      username,
      email,
    };

    setUsers([...users, user]);
    // setUsers(users.concat(user))

    // 이벤트도 props로 넘길 수 있다.
    // 회원등록 버튼 클릭하면 input 필드를 깨끗하게 해주기.
    setIntputs({
      username: "",
      email: "",
    });
    // nextId 값 하나 증가시키기
    nextId.current += 1;
  };

  // 회원 삭제 함수
  const onRemove = (id) => {
    // filter()
    setUsers(users.filter((user) => user.id != id));
  };

  // 회원 수정 함수(active 속성 수정)
  const onToggle = (id) => {
    setUsers(
      users.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user)
        // 3항 연산자.
        // user.id === id 가 참이라면
        // { ...users, active: !user.active } 반환하고
        // ...users 배열 복사하고, active에 user.active의 부정 넣어줌.
        // 거짓이면 user 반환
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        // event 도 props로 넘길 수 있다.
      ></CreateUser>
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        // 부모에가 넘겨줘야 자식이 사용할 수 있다.
      ></UserList>
      {/* 자식인 UserList에 데이터를 넘겨준다. 자식은 props로 받음. */}
    </>
  );
}

export default App4;

// UserList, CreateUser의 부모.
// App4, UserList, CreateUser은 같이 봐야한다.
