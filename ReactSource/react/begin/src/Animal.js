import { useState } from "react";

function Animal() {
  const [src, setSrc] = useState("./img/dog.jpg");

  let img = null;

  const onToggle = (e) => {
    setSrc(!src);
    console.log(src);
  };

  if (src) {
    img = "./img/dog.jpg";
  } else {
    img = "./img/cat.jpg";
  }

  return (
    <>
      <img src={img} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경하기</button>
      </div>
    </>
  );
}

export default Animal;
