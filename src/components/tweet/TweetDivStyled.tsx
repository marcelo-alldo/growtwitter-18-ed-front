import styled from 'styled-components';

const TweetDivStyled = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e4e4e4;
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
  .user-image {
    border-radius: 10rem;
    width: 3rem;
    align-self: flex-start;
  }
  p {
    margin: 0;
  }
`;

export default TweetDivStyled;
