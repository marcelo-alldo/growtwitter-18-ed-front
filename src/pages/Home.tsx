import { useNavigate } from 'react-router-dom';
import ExploreStyled from '../components/explore/ExploreStyled';
import Tweets from '../components/tweet/Tweets';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (!userLogged) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <DefaultLayout>
        {loading ? (
          <div style={{ height: '100vh', width: '100%', display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <ExploreStyled>
              <h2>Página inicial</h2>
            </ExploreStyled>
            <Tweets user={false} />
          </>
        )}
      </DefaultLayout>
    </>
  );
}

export default Home;
