import { useState } from 'react';
import H2Styled from '../components/login-and-create-account/H2Styled';
import LabelStyled from '../components/login-and-create-account/LabelStyled';
import LoginInputStyled from '../components/login-and-create-account/LoginInputStyled';
import { useNavigate } from 'react-router-dom';
import { doPost } from '../services/api';
import ButtonDefault from '../components/button/ButtonDefault';
import BlueCardStyled from '../components/login-and-create-account/BlueCardStyled';
import WhiteCardStyled from '../components/login-and-create-account/WhiteCardStyled';
import PStyled from '../components/login-and-create-account/PStyled';
import CenterCardStyled from '../components/login-and-create-account/CenterCardStyled';
import LayoutStyled from '../components/login-and-create-account/LayoutStyled';
import SmallStyled from '../components/login-and-create-account/SmallStyled';
import Links from '../components/login-and-create-account/LinksCreatandLogin';
import { toast, ToastContainer } from 'react-toastify';

function CreateAccount() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleCreateAccount() {
    if (!email || !password || !name || !username) {
      toast.error('Favor preencher os campos vazios.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }

    setLoading(true);
    const response = await doPost('/users', { email, password, name, username }, '');

    setLoading(false);
    if (response.success) {
      toast.success('Conta criada com sucesso!', {
        position: 'top-center',
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.error('Usuário já existente. Cadastre outro email.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  }

  return (
    <LayoutStyled>
      <CenterCardStyled>
        <BlueCardStyled>
          <H2Styled>Growtwitter</H2Styled>
          <SmallStyled>Trabalho final do bloco intermediário</SmallStyled>
          <PStyled>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma
            experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte dessa comunidade
            que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </PStyled>
        </BlueCardStyled>
        <WhiteCardStyled>
          <H2Styled>Criar conta no Growtwitter</H2Styled>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <LabelStyled htmlFor="name">Nome</LabelStyled>
            <LoginInputStyled type="text" value={name} onChange={ev => setName(ev.target.value)} />
            <LabelStyled htmlFor="userName">Apelido</LabelStyled>
            <LoginInputStyled type="text" value={username} onChange={ev => setUsername(ev.target.value)} />
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <LoginInputStyled type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            <LabelStyled htmlFor="password">Senha</LabelStyled>
            <LoginInputStyled type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          {loading ? (
            `Carregando...`
          ) : (
            <ButtonDefault label="Entrar" action={handleCreateAccount} bigButton={true} lessRound={true} />
          )}
          <Links href="login" text="Já tem uma conta? Faça o login!" />
        </WhiteCardStyled>
      </CenterCardStyled>
      <ToastContainer />
    </LayoutStyled>
  );
}

export default CreateAccount;
