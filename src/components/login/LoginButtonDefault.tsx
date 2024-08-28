import LoginButtonStyled from './LoginButtonStyled';

interface LoginButtonDefaultProps {
  label: string;
  action?: () => void;
}

function LoginButtonDefault({ action, label }: LoginButtonDefaultProps) {
  return <LoginButtonStyled onClick={action}>{label}</LoginButtonStyled>;
}

export default LoginButtonDefault;
