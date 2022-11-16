function Header(props) {
  // console.log("Header props", props);

  return (
    <>
      <header>
        <h1>
          <a href="/">
            {props.name} Front 개발 - {props.title}
          </a>
        </h1>
      </header>
    </>
  );
}

export default Header;
