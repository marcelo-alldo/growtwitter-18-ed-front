function MenuNavigation() {
  return (
    <div className="container">
      <div className="menu">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <nav>
            <ul>
              <li>Pagina Inicial</li>
              <li>Explorar</li>
              <li>Perfil</li>
            </ul>
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