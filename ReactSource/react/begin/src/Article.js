function Article(props) {
  console.log("article props", props);

  return (
    <>
      <article>
        <h2 style={{ color: props.color }}>Welcome</h2>
        <p style={{ color: props.color }}>
          Hello, React. I'm Freshman, but I'm very hot. A-yo-man.
        </p>
      </article>
    </>
  );
}

export default Article;
