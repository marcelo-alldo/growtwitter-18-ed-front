import ButtonDefaultStyled from './ButtonDefaultStyled';

export interface ButtonDefaultProps {
  label?: string;
  action?: () => void;
  bigButton: boolean;
  lessRound: boolean;
}

function ButtonDefault({ action, label, bigButton, lessRound }: ButtonDefaultProps) {
  return (
    <ButtonDefaultStyled onClick={action} type="button" bigButton={bigButton} lessRound={lessRound}>
      {label || ''}
    </ButtonDefaultStyled>
  );
}

export default ButtonDefault;
