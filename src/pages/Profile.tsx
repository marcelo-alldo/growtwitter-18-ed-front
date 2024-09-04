// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonReturn from '../components/ButtonReturn/ButtonReturn';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tweets from '../components/tweet/Tweets';
import { doGet } from '../services/api';
import { CircularProgress } from '@mui/material';

function Profile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tweetsNumber, setTweetsNumber] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userUsername, setUserUsername] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [userIdAvatar, setUserIdAvatar] = useState<string>('');
  const navigate = useNavigate();

  const config = {
    navigation: true,
    footer: true,
  };

  const userLogged = JSON.parse(localStorage.getItem('userLogged') || '{}');

  async function getInfos() {
    const response = await doGet(`/users/${userId}`, `${userLogged.token}`);
    if (response.success) {
      setUserName(response.data.name);
      setUserUsername(response.data.username);
      setLoading(false);
      return;
    }
  }

  async function getTweets() {
    const response = await doGet(`/tweet/${userId}`, `${userLogged.token}`);
    if (response.success) {
      setTweetsNumber(response.data.length);
    }
  }

  useEffect(() => {
    if (!userLogged) {
      navigate('/login');
      return;
    }
    setUserId(userLogged.id);
    setUserIdAvatar(userId.replace(/[^0-9\.]+/g, ''));
    getTweets();
  }, [userLogged]);

  useEffect(() => {
    if (userId) {
      getInfos();
    }
  }, [userId]);

  return (
    <DefaultLayout config={config}>
      {loading ? (
        <div style={{ height: '100vh', width: '100%', display: 'grid', placeItems: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#F2F2F2',
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
                <p style={{ fontSize: '18px', fontWeight: '700', margin: '0px' }}>Perfil de @{userUsername}</p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#848484',
                    margin: '0px',
                  }}
                >
                  {tweetsNumber} Tweets
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
              <Avatar useBorder={true} src={userIdAvatar} useWidth={false} />
              <p style={{ margin: '0px', fontWeight: '500' }}>{userName}</p>
              <p style={{ margin: '0px', fontWeight: '500' }}>@{userUsername}</p>
            </div>
          </div>
          <div style={{ width: '100%', height: '70%', display: 'flex', flexDirection: 'column' }}>
            <Tweets user={true} />
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}

export default Profile;
