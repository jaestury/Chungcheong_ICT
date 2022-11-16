function Props(props) {
  // props로 넘겨받은 값을 수정해서 사용할 수 있는가?

  //   props.value = props.value + " from App3.js";
  // Cannot assign to read only property 'value' of object '#<Object>'
  // props 넘겨받는 값은 수정해서 사용하는 것은 불가능하다. read only.

  const value = props.value + " from App3.js";
  // props로 넘겨받은 값을 변수에 담고, 변수를 수정해서 사용하는 것은 가능하다.

  return (
    <>
      <div>{value}</div>
    </>
  );
}

export default Props;
