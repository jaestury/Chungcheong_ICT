function Nav(props) {
  // console.log("Nav props", props.topics);

  // props로 넘어온 배열 담기
  const topics = props.topics;
  // const lis = [];

  // for (let index = 0; index < topics.length; index++) {
  //   // console.log(topics[index]);
  //   let topic = topics[index];
  //   lis.push(
  //     <li key={topic.id}>
  //       {/* for 문을 사용하려면 key값을 넣어줘야한다. */}
  //       <a href={"/read/" + topic.id}>{topic.body}</a>
  //     </li>
  //   );
  // }
  // JSX 안에서는 for 문이나 if 문 사용 불가능.
  // 때문에 return 문 바깥쪽에서 for 문을 사용하고, 그것을 가져와서 사용한다.
  // for 문 사용시 `Warning: Each child in a list should have a unique "key" prop.` 보게될 것.

  return (
    <>
      {/* <nav>
        <ol>{lis}</ol>
      </nav> */}
      <nav>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a href={"/read/" + topic.id}>{topic.body}</a>
          </li>
        ))}
      </nav>
    </>
  );
}

export default Nav;
