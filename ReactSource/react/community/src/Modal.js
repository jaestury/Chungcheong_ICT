import { useState } from "react";
import "./Modal.css";
// Modal : 검색창 등을 누르면 뒤쪽이 희미해지면서 선택 못하게 하는 것.

function Modal(props) {
  console.log("Modal", props);

  let choiceArticle = props.choiceArticle;

  return (
    <>
      <div className="modal">
        <h4>{choiceArticle.title}</h4>
        <p>{choiceArticle.regedate}</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default Modal;
