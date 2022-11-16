import Hello2 from "./Hello2";
import Props from "./Props";
import Wrapper from "./Wrapper";

function App3() {
  return (
    <>
      <h1>Props 적용하기</h1>
      <Props value="THIS IS PROPS"></Props>
      <Wrapper>
        <Hello2 name="react" color="red" isSpecial={true}></Hello2>
        <Hello2 color="blue"></Hello2>
      </Wrapper>
    </>
  );
}

export default App3;
