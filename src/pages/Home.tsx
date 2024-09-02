import { useNavigate } from 'react-router-dom';
import ExploreStyled from '../components/explore/ExploreStyled';
import Tweet from '../components/tweet/Tweet';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const userLogged = localStorage.getItem('userLogged');
    if (!userLogged) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <DefaultLayout>
        <ExploreStyled>
          <h2>Página inicial</h2>
        </ExploreStyled>
        <Tweet user={false} />
      </DefaultLayout>
    </>
  );
}

export default Home;
