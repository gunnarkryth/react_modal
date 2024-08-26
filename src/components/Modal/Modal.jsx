import s from "./Style.module.scss";

export const Modal = ({onClose, children}) => {
  return (
    <section className={s.Modal}>
      <button className={s.CloseButton} onClick={onClose}>
        <img src="src/assets/images/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </button>
      {children}
    </section>
  );
};
