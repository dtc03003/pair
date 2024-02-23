import ModalTitle from "../ModalTitle";
import ModalInput from "../ModalInput";
import ModalConfirmButton from "../ModalConfirmButton";

export default function ModalEdit() {
  return (
    <>
      <ModalTitle>폴더 추가</ModalTitle>
      <ModalInput placeholder="내용 입력"></ModalInput>
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </>
  );
}
