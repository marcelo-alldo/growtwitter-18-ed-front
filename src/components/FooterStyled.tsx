import { styled } from 'styled-components';

const FooterStyled = styled.footer`
  width: 30vw;
  height: 100vh;

  font-family: sans-serif;

  .card {
    margin: 30px;
    padding: 15px;
    border-radius: 15px;
    background-color: #e9e9e9;
    color: #2a2a2a;

    .titleCard {
      font-size: 0.9em;
    }

    .titleParagrafo {
      display: flex;
      flex-direction: column;
      font-weight: bold;

      margin-top: 20px;
      font-size: 0.8em;

      .time {
        font-weight: 400;
        font-size: 0.87em;
        color: #7d7d7d;
        margin-bottom: 3px;
      }
    }

    .more {
      a {
        color: #2d9fef;
      }
      margin-top: 20px;
      font-size: 0.72em;
    }
  }
`;

export default FooterStyled;
