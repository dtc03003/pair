import ModalTitle from "../ModalTitle";
import ModalDescription from "../ModalDescription";
import ModalConfirmButton from "../ModalConfirmButton";
import ModalList from "../ModalList";

const FOLDER_LIST = [
  { id: 1, name: "코딩팁", description: "7개 링크" },
  { id: 2, name: "채용 사이트", description: "12개 링크" },
  { id: 3, name: "유용한 글", description: "30개 링크" },
  { id: 4, name: "나만의 장소", description: "3개 링크" },
];

export default function ModalEdit({ list }) {
  return (
    <>
      <ModalTitle>폴더 추가</ModalTitle>
      <ModalDescription>링크 주소</ModalDescription>
      <ModalList list={FOLDER_LIST}></ModalList>
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </>
  );
}
