function Header(props) {
  console.log("Header props", props);

  return (
    <>
      <header>
        <h1>
          <a href="/" onClick={props.onClick}>
            {/* 부모가 이벤트를 넘겼고, 그것을 자식이 갖다가 쓴다. */}
            {props.name} Front 개발 - {props.title}
          </a>
        </h1>
      </header>
    </>
  );
}

export default Header;
