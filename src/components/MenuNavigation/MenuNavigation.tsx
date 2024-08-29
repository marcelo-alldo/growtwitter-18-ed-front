import MenuItem from "./MenuItem";
import iconPageInitial from "../../../public/icone_pagina inicial_selecionado.svg"
import iconPageExplorer from "../../../public/icone_explorar_selecionado.svg"
import iconPageProfile from "../../../public/icone_perfil.svg"

function MenuNavigation() {
  return (
    <div className="container">
      <div className="menu">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <nav>
            <MenuItem icon={iconPageInitial} label="Página Inicial" route="/"/>
            <MenuItem icon={iconPageExplorer} label="Explorar" route="/"/>
            <MenuItem icon={iconPageProfile} label="Perfil" route="/"/>
          </nav>
        </div>
        <div>
          <button>Tweetar</button>
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