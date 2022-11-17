import { useState } from "react";

function Animal() {
  const [src, setSrc] = useState("./img/dog.jpg");
  const [btn, setBtn] = useState(true);

  const onToggle = () => {
    if (btn) {
      setSrc("./img/cat.jpg");
      setBtn(false);
    } else {
      setSrc("./img/dog.jpg");
      setBtn(true);
    }
  };

  return (
    <>
      <img src={src} alt="개와 고양이" />
      {/* alt : 이미지가 뜨지 않을 때 나오는 대체 텍스트
      img 태그 작성시 지켜야 할 웹 표준. */}
      <div>
        <button onClick={onToggle}>사진 변경하기</button>
      </div>
    </>
  );
}

export default Animal;
