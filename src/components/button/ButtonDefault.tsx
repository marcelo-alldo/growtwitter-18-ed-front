import ButtonDefaultStyled from './ButtonDefaultStyled';

interface ButtonDefaultProps {
  label: string;
  action?: () => void;
}

function ButtonDefault({ action, label }: ButtonDefaultProps) {
  return <ButtonDefaultStyled onClick={action}>{label}</ButtonDefaultStyled>;
}

export default ButtonDefault;
