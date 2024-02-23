import ModalTitle from "../ModalTitle";
import ModalDescription from "../ModalDescription";
import ModaDeleteButton from "../ModalDeleteButton";

export default function ModalDeleteLink() {
  return (
    <>
      <ModalTitle>링크 삭제</ModalTitle>
      <ModalDescription>대충 링크</ModalDescription>
      <ModaDeleteButton>삭제하기</ModaDeleteButton>
    </>
  );
}
