import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
body{
  padding: 0;
  margin: 0;
};

#root {
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
`;

export default GlobalStyled;
