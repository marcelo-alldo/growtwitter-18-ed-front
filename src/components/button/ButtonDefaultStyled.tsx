import styled from 'styled-components';
import { ButtonDefaultProps } from './ButtonDefault';

const ButtonDefaultStyled = styled.button<ButtonDefaultProps>`
  width: ${props => (props.bigButton ? '64%' : '210px')};
  height: 39px;
  border-radius: ${props => (props.lessRound ? '10px' : '40px')};
  border: none;
  margin-top: 12px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonDefaultStyled;
