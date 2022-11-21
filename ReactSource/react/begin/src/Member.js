import { Outlet } from "react-router-dom";

function Member({ users }) {
  return (
    <>
      <div>
        <h1>Member</h1>
        <div>
          <h1>넘어온 users</h1>
          {users.map((user) => (
            <div>
              <div>{user.id}</div>
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.active}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>footer</h3>
      </div>
      {/* 포함된 컴포넌트 보여주기. */}
      <Outlet></Outlet>
    </>
  );
}

export default Member;
