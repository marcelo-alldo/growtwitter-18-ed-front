import { useNavigate } from 'react-router-dom';
import ExploreStyled from '../components/explore/ExploreStyled';
import Tweets from '../components/tweet/Tweets';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const selector = useAppSelector(state => state.userLogin);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    if (!selector.token) {
      navigate('/login');
    }
  }, [selector.token, navigate]);
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
