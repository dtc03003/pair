import ModalTitle from "../ModalTitle";
import ModalInput from "../ModalInput";
import ModalConfirmButton from "../ModalConfirmButton";
import BaseModal from "../BaseModal";

export default function ModalEdit({ isOpen, onClose }) {
  if (isOpen === false) {
    return null;
  }

  return (
    <BaseModal onClose={onClose}>
      {/* <ModalCloseButton className='top-16 right-16 absolute' onClose={onClose} /> */}
      <ModalTitle>폴더 이름 변경</ModalTitle>
      <ModalInput placeholder="유용한 팁" />
      <ModalConfirmButton>변경하기</ModalConfirmButton>
    </BaseModal>
  );
}
