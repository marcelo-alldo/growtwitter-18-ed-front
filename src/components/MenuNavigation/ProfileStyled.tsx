import styled from 'styled-components';

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;

  .profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  button {
    border: 0;
    background-color: transparent;
    color: #7a7a7a;
    padding: 1rem;
    cursor: pointer;
    font-weight: 600;
  }
  p {
    font-weight: 700;
  }
  small {
    font-weight: 300;
  }
`;

export default ProfileStyled;
