import ExploreStyled from '../components/explore/ExploreStyled';
import Tweet from '../components/tweet/Tweet';
import DefaultLayout from '../config/layout/DefaultLayout';

function Home() {
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
