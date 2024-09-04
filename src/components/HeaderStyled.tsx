import { styled } from 'styled-components';

const HeaderStyled = styled.header`

    width: 20vw;
    height: 100vh;
    /* background-color: #050202; */

    .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin: 0 40px;

        .perfil-sair {
            display: flex;
            flex-direction: column;
            .perfil {
                display: flex;
            }
        }
    }
`

export default HeaderStyled