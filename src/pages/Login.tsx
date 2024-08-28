import { useState } from 'react';
import LoginInputStyled from '../components/login/LoginInputStyled';
import LoginButtonDefault from '../components/login/LoginButtonDefault';
import H2Styled from '../components/login/H2Styled';
import LabelStyled from '../components/login/LabelStyled';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  function handleLogin() {
    if (!email || !password) {
      alert('Favor preencher os campos.');
    }

    if (email && password) {
      navigate('/home');
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '40vh',
          width: '70vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '55%',
            height: '100%',
            backgroundColor: '#1d9bf0',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            color: '#ffffff',
          }}
        >
          <H2Styled>Growtwitter</H2Styled>
          <small style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.2rem' }}>
            Trabalho final do bloco intermediário
          </small>
          <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.5rem' }}>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma
            experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte dessa comunidade
            que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </div>
        <div
          style={{
            width: '45%',
            height: '100%',
            backgroundColor: '#ffffff',
            color: '#070707',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <H2Styled>Entrar no Growtwitter</H2Styled>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <LabelStyled htmlFor="user">Email</LabelStyled>
            <LoginInputStyled type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            <LabelStyled htmlFor="password">Password</LabelStyled>
            <LoginInputStyled type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          <LoginButtonDefault label="Entrar" action={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
