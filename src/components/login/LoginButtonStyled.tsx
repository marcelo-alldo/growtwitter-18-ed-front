import styled from 'styled-components';

const LoginButtonStyled = styled.button`
  width: 21vw;
  height: 35px;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

export default LoginButtonStyled;
