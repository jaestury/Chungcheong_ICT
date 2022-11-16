import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

// props : 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법

function App2() {
  // Nav 호출하면서 배열 넘겨주기
  const topics = [
    { id: 1, title: "html", body: "HTML" },
    { id: 2, title: "css", body: "CSS" },
    { id: 3, title: "javascript", body: "JAVASCRIPT" },
  ];

  return (
    <>
      <Header title="Study" name="hong"></Header>
      <Nav topics={topics}> </Nav>
      <Article color="blue"></Article>
    </>
  );
}

export default App2;
