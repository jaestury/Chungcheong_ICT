function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };

  return (
    <>
      <div style={style}>{children}</div>
      {/* children 을 사용해서 props 안에 다시 props를 넣을 수 있다.  */}
    </>
  );
}

export default Wrapper;
