import { useState } from "react";
import "./App.css";

import ModalAdd from "./components/ModalPage/ModalAdd";
import ModalAddFolder from "./components/ModalPage/ModalAddFolder";
import ModalDeleteFolder from "./components/ModalPage/ModalDeleteFolder";
import ModalDeleteLink from "./components/ModalPage/ModalDeleteLink";

import ModalEdit from "./components/ModalPage/ModalEdit";
import ModalShare from "./components/ModalPage/ModalShare";

import kakao from "./assets/svg/kakao.svg";
import facebook from "./assets/svg/facebook.svg";
import link from "./assets/svg/link.svg";

const ICON_LIST = [
  { id: 1, name: "카카오톡", img: kakao },
  { id: 2, name: "페이스북", img: facebook },
  { id: 3, name: "링크복사", img: link },
];

const FOLDER_LIST = [
  { id: 1, name: "코딩팁", description: "7개 링크" },
  { id: 2, name: "채용 사이트", description: "12개 링크" },
  { id: 3, name: "유용한 글", description: "30개 링크" },
  { id: 4, name: "나만의 장소", description: "3개 링크" },
];

function ModalInput({ placeholder }) {
  return <input placeholder={placeholder} />;
}

function App() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);

  function handleClick1() {
    setIsModalOpen1((prev) => !prev);
  }

  const handleClickCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  function handleClick2() {
    setIsModalOpen2((prev) => !prev);
  }

  function handleClick3() {
    setIsModalOpen3((prev) => !prev);
  }

  function handleClick4() {
    setIsModalOpen4((prev) => !prev);
  }

  function handleClick5() {
    setIsModalOpen5((prev) => !prev);
  }

  function handleClick6() {
    setIsModalOpen6((prev) => !prev);
  }

  function handleAllOff() {
    setIsModalOpen1(false);
    setIsModalOpen2(false);
    setIsModalOpen3(false);
    setIsModalOpen4(false);
    setIsModalOpen5(false);
    setIsModalOpen6(false);
  }

  return (
    <div className="App">
      <ModalEdit isOpen={isModalOpen1} onClose={handleClickCloseModal1} />

      {isModalOpen2 && (
        <div className="modalBackGround" onClick={() => handleAllOff()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ModalAddFolder />
          </div>
        </div>
      )}

      {isModalOpen3 && (
        <div className="modalBackGround" onClick={() => handleAllOff()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ModalShare list={ICON_LIST} />
          </div>
        </div>
      )}

      {isModalOpen4 && (
        <div className="modalBackGround" onClick={() => handleAllOff()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ModalDeleteFolder />
          </div>
        </div>
      )}

      {isModalOpen5 && (
        <div className="modalBackGround" onClick={() => handleAllOff()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {<ModalDeleteLink />}
          </div>
        </div>
      )}

      {isModalOpen6 && (
        <div className="modalBackGround" onClick={() => handleAllOff()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {<ModalAdd list={FOLDER_LIST} />}
          </div>
        </div>
      )}

      <button className="outbtn" onClick={() => handleClick1()}>
        모달1 클릭
      </button>
      <button className="outbtn" onClick={() => handleClick2()}>
        모달2 클릭
      </button>
      <button className="outbtn" onClick={() => handleClick3()}>
        모달3 클릭
      </button>
      <button className="outbtn" onClick={() => handleClick4()}>
        모달4 클릭
      </button>
      <button className="outbtn" onClick={() => handleClick5()}>
        모달5 클릭
      </button>
      <button className="outbtn" onClick={() => handleClick6()}>
        모달6 클릭
      </button>
    </div>
  );
}

export default App;
