import ModalStyled from './ModalStyled';
import ModalDivStyled from './ModalDivStyled';
import iconClose from '../../../public/X.svg';

interface ModalProps {
  value: string;
  setValue: (e: any) => void;
  actionCancel: () => void;
  actionConfirm: () => void;
}

function Modal({ actionCancel, actionConfirm, value, setValue }: ModalProps) {
  return (
    <>
      <ModalStyled>
        <ModalDivStyled>
          <button onClick={actionCancel}>
            <img style={{ width: '1rem' }} src={iconClose} />
          </button>

          <textarea placeholder="Digite seu tweet aqui!" value={value} onChange={setValue} />

          <button onClick={actionConfirm}>Tweetar</button>
        </ModalDivStyled>
      </ModalStyled>
    </>
  );
}

export default Modal;
