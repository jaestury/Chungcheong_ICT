import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Main from "./Main";
import List from "./List";

function App() {
  // 전체 스타일 적용
  // Todo 안에 들어오는 모든 컴포넌트는 이것을 따라갈 것이라는 뜻.
  // Global.
  // styled-components는 컴포넌트 형태로 만들어서 적용하는 것이 특징.
  const GlabalStyle = createGlobalStyle`
    body{
      background:#d0ebff;
    }
  `;

  return (
    <>
      <GlabalStyle />
      <Main>
        {/* Main에 children 사용, 자식 컴포넌트를 넣어주면 됨. 
        Hearder, List 등 넣어줌 */}
        <Header></Header>
        <List></List>
      </Main>
    </>
  );
}

export default App;
