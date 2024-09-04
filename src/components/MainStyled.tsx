import { styled } from 'styled-components';

const MainStyled = styled.main`
  width: 50vw;
  height: 100vh;

  border-left: 1px solid #b0b0b0;
  border-right: 1px solid #b0b0b0;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  
  -ms-overflow-style: none;
`;

export default MainStyled;
