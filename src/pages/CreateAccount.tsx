import { useState } from 'react';
import H2Styled from '../components/login/H2Styled';
import LabelStyled from '../components/login/LabelStyled';
import LoginButtonDefault from '../components/login/LoginButtonDefault';
import LoginInputStyled from '../components/login/LoginInputStyled';
import { useNavigate } from 'react-router-dom';
import { doPost } from '../services/api';

function CreateAccount() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  async function handleCreateAccount() {
    if (!email || !password || !name || !userName) {
      alert('Favor preencher os campos.');
    }

    const response = await doPost('/users', { email, password, name, userName }, '');
    console.log(response);

    if (response.success) {
      navigate('/login');
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
          <small style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.5rem' }}>
            Trabalho final do bloco intermediário
          </small>
          <p style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', fontSize: '1.5rem' }}>
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
          <H2Styled style={{ padding: '0' }}>Criar conta no Growtwitter</H2Styled>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <LabelStyled htmlFor="name">Nome</LabelStyled>
            <LoginInputStyled type="text" value={name} onChange={ev => setName(ev.target.value)} />
            <LabelStyled htmlFor="userName">Apelido</LabelStyled>
            <LoginInputStyled type="text" value={userName} onChange={ev => setUserName(ev.target.value)} />
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <LoginInputStyled type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            <LabelStyled htmlFor="password">Senha</LabelStyled>
            <LoginInputStyled type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          <LoginButtonDefault label="Entrar" action={handleCreateAccount} />
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
