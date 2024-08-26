import s from "./Style.module.scss";

export const ModalWrapper = ({ onClose, children }) => {
  return (
    <div className={s.ModalWrapper} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
