// 이벤트 창 출력되도록. 근데 One, Two가 번갈아서 나오도록 하자

import { Outlet } from "react-router-dom";
import { Stack, Badge } from "react-bootstrap";

function Event() {
  return (
    <>
      <div className="mt-5">
        <Stack direction="horizontal" gap={3}>
          <h1 className="mx-3">Today 이벤트</h1>
          <h4>
            <Stack direction="horizontal" gap={3}>
              <a href="/event/one">
                <Badge bg="primary">회원가입</Badge>
              </a>
              <a href="/event/two">
                <Badge bg="danger">생일쿠폰</Badge>
              </a>
            </Stack>
          </h4>
        </Stack>
        <Outlet />
      </div>
    </>
  );
}

export default Event;
