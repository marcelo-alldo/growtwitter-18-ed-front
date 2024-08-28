import styled from 'styled-components';

const ModalDivStyled = styled.section`
  height: 30vh;
  width: 25vw;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  textarea {
    align-self: center;
    width: 25vw;
    height: 20vh;
    background-color: white;
    border-style: none;
    outline: none;
    border-bottom: 1px solid #e4e4e4;
    resize: none;
    font-size: 1rem;
    font-weight: 600;
  }
  button {
    border: none;
    cursor: pointer;
  }
  button:nth-child(1) {
    width: 0.75rem;
    padding: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
  }
  button:nth-of-type(2n) {
    width: 5rem;
    height: 2rem;
    border-radius: 10rem;
    background-color: #1d9bf0;
    color: #fff;
    align-self: end;
  }
`;

export default ModalDivStyled;
