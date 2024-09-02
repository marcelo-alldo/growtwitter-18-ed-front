import MenuItem from './MenuItem';
import iconPageInitial from '../../../public/icone_pagina inicial_selecionado.svg';
import iconPageExplorer from '../../../public/icone_explorar_selecionado.svg';
import iconPageProfile from '../../../public/icone_perfil.svg';
import ButtonDefault from '../button/ButtonDefault';
import Modal from '../modal/Modal';
import { useEffect, useState } from 'react';
import { doGet, doPost } from '../../services/api';
import LogoGrow from '../../../public/logo_growtweet.svg';
import '../../index.css';
import Avatar from '../Avatar';
import ProfileStyled from './ProfileStyled';
import { useNavigate } from 'react-router-dom';

function MenuNavigation() {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [user, setUser] = useState<any>([]);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem('userLogged') || '{}');

  function showModal() {
    setShow(!show);
  }
  async function sendTweet() {
    try {
      const response = await doPost('/tweet', { content: value }, userLocal.token);
      if (response.success) {
        alert(response.msg);
        setValue('');
        setShow(false);
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
            <MenuItem icon={iconPageInitial} label="Página Inicial" route="/" />
            <MenuItem icon={iconPageExplorer} label="Explorar" route="/explore" />
            <MenuItem icon={iconPageProfile} label="Perfil" route="/" />
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
          <ButtonDefault label="Tweetar" action={showModal} />
        </div>
      </div>

      {/* RAFAEL E DOUGLAS */}
      <ProfileStyled>
        <div className="profile">
          <Avatar border={true} width={true} key={user.name} src={user.id} />
          <div>
            <p>{user.name}</p>
            <small>@{user.username}</small>
          </div>
        </div>
        <div>
          <button onClick={logout}>Sair</button>
        </div>
      </ProfileStyled>
    </div>
  );
}

export default MenuNavigation;
