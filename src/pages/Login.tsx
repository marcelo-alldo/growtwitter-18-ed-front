import { useState } from 'react';
import LoginInputStyled from '../components/login-and-create-account/LoginInputStyled';
import ButtonDefault from '../components/button/ButtonDefault';
import H2Styled from '../components/login-and-create-account/H2Styled';
import LabelStyled from '../components/login-and-create-account/LabelStyled';
import { useNavigate } from 'react-router-dom';
import { doPost } from '../services/api';
import BlueCardStyled from '../components/login-and-create-account/BlueCardStyled';
import WhiteCardStyled from '../components/login-and-create-account/WhiteCardStyled';
import PStyled from '../components/login-and-create-account/PStyled';
import CenterCardStyled from '../components/login-and-create-account/CenterCardStyled';
import LayoutStyled from '../components/login-and-create-account/LayoutStyled';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      alert('Favor preencher os campos.');
    }

    const response = await doPost('/auth', { email, password }, '');

    if (response.success) {
      const dataLogin = {
        email,
        token: response.data.token,
        id: response.id,
      };

      console.log(response);

      localStorage.setItem('userLogged', JSON.stringify(dataLogin));
      navigate('/');
    }
  }

  return (
    <LayoutStyled>
      <CenterCardStyled>
        <BlueCardStyled>
          <H2Styled>Growtwitter</H2Styled>
          <small style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.0rem' }}>
            Trabalho final do bloco intermediário
          </small>
          <PStyled>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma
            experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte dessa comunidade
            que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </PStyled>
        </BlueCardStyled>
        <WhiteCardStyled>
          <H2Styled>Entrar no Growtwitter</H2Styled>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <LabelStyled htmlFor="user">Email</LabelStyled>
            <LoginInputStyled type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            <LabelStyled htmlFor="password">Senha</LabelStyled>
            <LoginInputStyled type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          <ButtonDefault label="Entrar" action={handleLogin} />
          <a href='/create-account'>Criar conta?</a>
        </WhiteCardStyled>
      </CenterCardStyled>
    </LayoutStyled>
  );
}

export default Login;
