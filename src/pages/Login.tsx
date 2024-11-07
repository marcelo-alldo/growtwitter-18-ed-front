import { useEffect, useState } from 'react';
import LoginInputStyled from '../components/login-and-create-account/LoginInputStyled';
import ButtonDefault from '../components/button/ButtonDefault';
import H2Styled from '../components/login-and-create-account/H2Styled';
import LabelStyled from '../components/login-and-create-account/LabelStyled';
import { useNavigate } from 'react-router-dom';
import BlueCardStyled from '../components/login-and-create-account/BlueCardStyled';
import WhiteCardStyled from '../components/login-and-create-account/WhiteCardStyled';
import PStyled from '../components/login-and-create-account/PStyled';
import CenterCardStyled from '../components/login-and-create-account/CenterCardStyled';
import LayoutStyled from '../components/login-and-create-account/LayoutStyled';
import SmallStyled from '../components/login-and-create-account/SmallStyled';
import Links from '../components/login-and-create-account/LinksCreatandLogin';
import { toast, ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { userLogin } from '../store/models/loginSlice';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useAppSelector(state => state.userLogin);

  async function handleLogin() {
    if (!email || !password) {
      toast.error('Favor preencher os campos vazios.', {
        position: 'top-center',
        autoClose: 2000,
      });
      return;
    }

    const disparo = await dispatch(userLogin({ email, password }));

    if (disparo.payload?.auth === false) {
      toast.error('Erro de autenticação. Verifique seu email ou senha.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  }

  useEffect(() => {
    if (selector.user.token) {
      navigate('/');
    }
  }, [selector.user.token, navigate]);

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
          <H2Styled>Entrar no Growtwitter</H2Styled>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <LabelStyled htmlFor="user">Email</LabelStyled>
            <LoginInputStyled type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            <LabelStyled htmlFor="password">Senha</LabelStyled>
            <LoginInputStyled type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          {selector.loading ? (
            `Carregando...`
          ) : (
            <ButtonDefault label="Entrar" action={handleLogin} bigButton={true} lessRound={true} />
          )}
          <Links href="create-account" text="Não possui conta? Crie agora mesmo!" />
        </WhiteCardStyled>
      </CenterCardStyled>
      <ToastContainer />
    </LayoutStyled>
  );
}

export default Login;
