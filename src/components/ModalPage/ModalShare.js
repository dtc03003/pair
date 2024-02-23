import ModalTitle from "../ModalTitle";
import ModalDescription from "../ModalDescription";
import ModalIcons from "../ModalIcons";

export default function ModalShare({ list }) {
  return (
    <>
      <ModalTitle>폴더 공유</ModalTitle>
      <ModalDescription>폴더명</ModalDescription>
      <ModalIcons list={list} />
    </>
  );
}
