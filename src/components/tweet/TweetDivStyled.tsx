import styled from 'styled-components';

const TweetDivStyled = styled.div`
  width: 50vw;
  height: auto;
  border-top: 1px solid #b0b0b0;
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  margin: 0;
  align-items: center;
  gap: 1rem;
  button {
    gap: 5px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    margin: 0;
  }
`;

export default TweetDivStyled;
