// 리스트의 상단.
// 작성날짜와 요일, 남아 있는 할 일 개수

import styled from "styled-components";

// Header의 디자인 설정해주기. styled-components는 상수 선언해서 적용
// Header를 감싸는 div에 디자인 적용
const TodoHeaderBlock = styled.div`
  //  padding-top: 48px;
  //  padding-left: 32px;
  //  padding-right: 32px;
  //  padding-bottom: 24px;
  // 위, 왼쪽, 오른쪽, 아래 여백.

  padding: 48px 32px 24px;
  // 한번에 줄수도 있음.

  border-bottom: 2px solid #dee2e6;
  // border-bottom : 아래에 경계선 생성

  // h1에 대해 디자인 적용
  h1 {
    margin: 0;
    // margin은 바깥 여백.
    // padding은 안쪽 여백

    font-size: 36px;
    color: #343a60;
  }

  // 요일에 적용되는 디자인
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  // 남은 할 일에 적용될 디자인
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function Header() {
  // 오늘 날짜 추출
  const today = new Date(); // Thu Nov 24 2022 20:38:05 GMT+0900 (한국 표준시)
  console.log(today);

  // toLocaleDateString(locales, [옵션])
  // locales : 국가에 맞춰 형식을 바꿔줌.
  // [옵션] : 날짜 형식 스타일.
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <>
      <TodoHeaderBlock>
        <h1>{dateString}</h1>
        <div className="day">{day}</div>
        <div className="tasks-left">할 일 3개 남음</div>
        {/* 태그 안에 className=""을 써서 css 적용 */}
      </TodoHeaderBlock>
    </>
  );
}

export default Header;
