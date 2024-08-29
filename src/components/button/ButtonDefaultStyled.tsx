import styled from 'styled-components';

const ButtonDefaultStyled = styled.button`
  width: 210px;
  height: 39px;
  border-radius: 40px;
  border: none;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
`;

export default ButtonDefaultStyled;
