import ModalStyled from './ModalStyled';
import ModalDivStyled from './ModalDivStyled';
import iconClose from '../../../public/X.svg';
import { useState } from 'react';

interface ModalProps {
  placeholder?: string;
  buttonTitle?: string;
  value: string;
  setValue: (e: any) => void;
  actionCancel: () => void;
  actionConfirm: () => void;
}

function Modal({ buttonTitle, placeholder, actionCancel, actionConfirm, value, setValue }: ModalProps) {
  const [loading, setLoading] = useState<boolean>(false);

  function loadingButton() {
    setLoading(true);
  }

  return (
    <>
      <ModalStyled>
        <ModalDivStyled>
          <button onClick={actionCancel}>
            <img style={{ width: '1rem' }} src={iconClose} />
          </button>

          <textarea placeholder={placeholder || 'Digite seu tweet aqui!'} value={value} onChange={setValue} />

          {loading ? (
            `Carregando...`
          ) : (
            <button
              onClick={() => {
                actionConfirm();
                loadingButton();
              }}
            >
              {buttonTitle || 'Tweetar'}
            </button>
          )}
        </ModalDivStyled>
      </ModalStyled>
    </>
  );
}

export default Modal;
