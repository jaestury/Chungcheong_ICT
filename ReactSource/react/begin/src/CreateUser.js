// UserList 에 유저 추가하는 용도

// function CreateUser(props) { // 한번에 받기
function CreateUser({ username, email, onChange, onCreate }) {
  // 구조분해할당으로 따로 받기.
  return (
    <>
      <div>
        <input
          type="text"
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          type="text"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>회원가입</button>
      </div>
    </>
  );
}

export default CreateUser;
