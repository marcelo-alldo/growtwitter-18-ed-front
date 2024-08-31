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
  a {
    gap: 5px;
    display: flex;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    margin: 0;
  }
`;

export default TweetDivStyled;
