function User({ user, onRemove, onToggle }) {
  // 중괄호 껴서 받기 때문에, 분해할당.
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "blue" : "black",
        }}
        onClick={(e) => {
          onToggle(user.id);
          e.stopPropagation();
        }}
      >
        {user.id} : {user.username} ({user.email})
      </b>
      <button
        onClick={(e) => {
          onRemove(user.id);

          // e.preventDefault() : 태그가 가지고 있는 이벤트 중지
          // <a> : 링크대로 움직이는 기본값.
          // <button></button> : submit 개념. 이동한다.
          // <button type="submit"> : 이동
          // 위와 같은 태그들의 기본 이벤트 기능을 중지시킨다.

          // 이벤트 전파하지 말 것.
          // e.stopPropagation() : 이벤트 버블링
          e.stopPropagation();
        }}
      >
        삭제
      </button>
    </div>
    // users를 보여주는 코드 작성
  );
}

function UserList({ users, onRemove, onToggle }) {
  // 부모인 App4에서 데이터를 넘겨받는다. 구조분해할당으로 데이터를 넘겨받았다.
  return (
    <>
      {users.map((user) => (
        // map을 사용할 때는 key를 신경쓰자.
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
        // props 개념 사용. map으로 배열 출력.
      ))}
    </>
  );
}

export default UserList;
