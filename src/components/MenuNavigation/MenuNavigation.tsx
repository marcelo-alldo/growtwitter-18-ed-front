import MenuItem from './MenuItem';
import iconPageInitial from '../../../public/icone_pagina inicial_selecionado.svg';
import iconPageExplorer from '../../../public/icone_explorar_selecionado.svg';
import iconPageProfile from '../../../public/icone_perfil.svg';
import ButtonDefault from '../button/ButtonDefault';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { doPost } from '../../services/api';

function MenuNavigation() {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  function showModal() {
    setShow(!show);
  }
  async function sendTweet(value: string) {
    const getAuth = JSON.stringify(localStorage.getItem('userLogged'));

    try {
      const response = await doPost('/tweet', value, getAuth);
      if (response.success) {
        alert(response.msg);
        setValue('');
        setShow(false);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="container">
      <div className="menu">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <nav>
            <MenuItem icon={iconPageInitial} label="Página Inicial" route="/" />
            <MenuItem icon={iconPageExplorer} label="Explorar" route="/" />
            <MenuItem icon={iconPageProfile} label="Perfil" route="/" />
          </nav>
        </div>
        <div>
          {show ? (
            <Modal
              actionCancel={showModal}
              actionConfirm={sendTweet(value)}
              setValue={e => setValue(e.target.value)}
              value={value}
            />
          ) : (
            ''
          )}
          <ButtonDefault label="Tweetar" action={showModal} />
        </div>
      </div>

      <div className="perfil-sair">
        <div className="perfil">
          <div>Img perfil</div>
          <div>
            <h2>Nome</h2>
            <p>Usuario</p>
          </div>
        </div>
        <div>
          <button>Sair</button>
        </div>
      </div>
    </div>
  );
}

export default MenuNavigation;
