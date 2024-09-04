import MenuItem from './MenuItem';
import iconPageInitial from '../../../public/icone_pagina inicial.svg';
import iconPageExplorer from '../../../public/icone_explorar.svg';
import iconPageProfile from '../../../public/icone_perfil.svg';
import iconPageInitialSelecionado from '../../../public/icone_pagina inicial_selecionado.svg';
import iconPageExplorerSelecionado from '../../../public/icone_explorar_selecionado.svg';
import iconPageProfileSelecionado from '../../../public/icone_perfil_selecionado.svg';
import ButtonDefault from '../button/ButtonDefault';
import Modal from '../modal/Modal';
import { useContext, useEffect, useState } from 'react';
import { doGet, doPost } from '../../services/api';
import LogoGrow from '../../../public/logo_growtweet.svg';
import '../../index.css';
import Avatar from '../Avatar';
import ProfileStyled from './ProfileStyled';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { TweetContext } from '../../contexts/TweetsContext';

function MenuNavigation() {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [user, setUser] = useState<any>([]);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem('userLogged') || '{}');
  const [loading, setLoading] = useState<boolean>(false);
  const tweetContext = useContext(TweetContext);

  function showModal() {
    setShow(!show);
  }

  async function sendTweet() {
    try {
      setLoading(true);
      const response = await doPost('/tweet', { content: value }, userLocal.token);

      setLoading(false);
      if (response.success) {
        setValue('');
        setShow(false);
        toast.success('Tweet publicado com sucesso!!', {
          position: 'top-center',
        });
        tweetContext?.setData({});
      } else {
        toast.error('Error ao publicar seu tweet', {
          position: 'top-center',
        });
      }
    } catch (error) {
      return error;
    }
  }

  async function getUser() {
    const response = await doGet(`/users/${userLocal.id}`, userLocal.token);

    response.data.id = response.data.id.replace(/[^0-9\.]+/g, '');
    setUser(response.data);
  }

  function logout() {
    localStorage.removeItem('userLogged');
    navigate('/login');
  }

  useEffect(() => {
    if (userLocal.token) {
      getUser();
    }
  }, []);

  return (
    <div className="container">
      <div className="menu">
        <div>
          <img className="logoGrow" src={LogoGrow} alt="logo da growtweet" />
        </div>
        <div>
          <nav>
            <MenuItem icon={iconPageInitial} iconActive={iconPageInitialSelecionado} label="Página Inicial" route="/" />
            <MenuItem
              icon={iconPageExplorer}
              iconActive={iconPageExplorerSelecionado}
              label="Explorar"
              route="/explore"
            />
            <MenuItem icon={iconPageProfile} iconActive={iconPageProfileSelecionado} label="Perfil" route="/profile" />
          </nav>
        </div>
        <div>
          {show ? (
            <Modal
              actionCancel={showModal}
              actionConfirm={sendTweet}
              setValue={e => setValue(e.target.value)}
              value={value}
            />
          ) : (
            ''
          )}
          {loading ? (
            `Carregando...`
          ) : (
            <ButtonDefault label="Tweetar" action={showModal} bigButton={false} lessRound={false} />
          )}
        </div>
      </div>
      {/* RAFAEL E DOUGLAS */}
      <ProfileStyled>
        <ToastContainer />
        <div className="profile">
          <Avatar useBorder={false} useWidth={true} key={user.name} src={user.id} />
          <div>
            <p>{user.name}</p>
            <small>@{user.username}</small>
          </div>
        </div>
        <div>{loading ? `Carregando...` : <button onClick={logout}>Sair</button>}</div>
      </ProfileStyled>
    </div>
  );
}

export default MenuNavigation;
