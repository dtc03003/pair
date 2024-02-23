export default function BaseModal({ onClose, children }) {
  return (
    <div className="modalBackGround" onClick={onClose}>
      <div className="modal relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
