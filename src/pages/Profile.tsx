import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonReturn from '../components/ButtonReturn/ButtonReturn';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { doGet } from '../services/api';
import { useParams } from 'react-router-dom';


function Profile() {
  const idUser = useParams()
  const [enableRender, setEnableRender] = useState<boolean>(false);
  const [tweetsUser, setTweetsUser] = useState<any>(undefined);

  const config = {
    navigation: true,
    footer: true,
  };

  useEffect(() => {
    const tokenFalso = '48d3b35b-12d2-43a6-a76d-5ea9335e38b8'; // token do usuario admin@hotmail.com
    async function getTweets() {
      const response = await doGet(`/tweet/${idUser}`, `${tokenFalso}`); // Adicionar token que vem do UserContext.token
      console.log(response)
      if (response.success) {
        console.log(response.data);
        setTweetsUser(response.data);
        setEnableRender(true);
        return;
      }
    }
    getTweets();
  }, []);

  return (
    <DefaultLayout config={config}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#fff',
          color: 'black',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '30%',
            boxSizing: 'border-box',
            padding: '5px',
            borderBottom: '0.5px solid #DCDCDC',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '30%',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '5%',
                height: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <ButtonReturn>
                <ArrowBackIcon htmlColor="#000000" />
              </ButtonReturn>
            </div>
            <div
              style={{
                width: '95%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontSize: '18px', fontWeight: '700', margin: '0px' }}>Perfil de @daphne</p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#848484',
                  margin: '0px',
                }}
              >
                X tweets
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <img
              src=""
              alt=""
              style={{
                backgroundColor: '#be0a0a',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid gray',
              }}
            />
            <p style={{ margin: '0px', fontWeight: '500' }}>Daphne Dog</p>
            <p style={{ margin: '0px', fontWeight: '500' }}>@perfil</p>
          </div>
        </div>
        <div style={{ width: '100%', height: '70%', display: 'flex', flexDirection: 'column' }}>
          {enableRender &&
            tweetsUser.map((item: any) => (
              <div>
                {item.userId}
                {item.content}
                {item.created_at}
              </div>
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
