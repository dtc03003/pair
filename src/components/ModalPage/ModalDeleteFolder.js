import ModalTitle from "../ModalTitle";
import ModalDescription from "../ModalDescription";
import ModaDeleteButton from "../ModalDeleteButton";

export default function ModalDeleteFolder() {
  return (
    <>
      <ModalTitle>폴더 삭제</ModalTitle>
      <ModalDescription>폴더명</ModalDescription>
      <ModaDeleteButton>삭제하기</ModaDeleteButton>
    </>
  );
}
