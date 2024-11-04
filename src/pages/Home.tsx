import { useNavigate } from 'react-router-dom';
import ExploreStyled from '../components/explore/ExploreStyled';
import Tweets from '../components/tweet/Tweets';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';

function Home() {
  const navigate = useNavigate();
  const selector = useAppSelector(state => state.userLogin);

  useEffect(() => {
    if (!selector.user.token) {
      navigate('/login');
    }
  }, [selector.user.token, navigate]);

  return (
    <>
      <DefaultLayout>
        {selector.loading ? (
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
