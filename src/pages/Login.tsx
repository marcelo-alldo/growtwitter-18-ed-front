import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          <h2 style={{ paddingTop: '50px', paddingLeft: '10px', paddingRight: '10px', fontSize: '3em', margin: '0' }}>
            Growtwitter
          </h2>
          <small style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1em' }}>
            Trabalho final do bloco intermediário
          </small>
          <p style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '1.5em' }}>
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
          <h2 style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '3em', margin: '0' }}>
            Entrar no Growtwitter
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <label style={{ fontSize: '1.5em', color: 'grey', alignSelf: 'start' }} htmlFor="user">
              Email
            </label>
            <input
              style={{ width: '20vw', height: '30px', borderRadius: '7px' }}
              type="text"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <label style={{ fontSize: '1.2em', color: 'grey', alignSelf: 'start' }} htmlFor="password">
              Password
            </label>
            <input
              style={{ width: '20vw', height: '30px', borderRadius: '7px' }}
              type="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
            />
          </div>
          <button
            style={{
              width: '20vw',
              height: '35px',
              borderRadius: '7px',
              backgroundColor: '#1d9bf0',
              color: '#ffffff',
              fontSize: '1.2em',
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
