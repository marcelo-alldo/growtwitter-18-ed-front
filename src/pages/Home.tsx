import Tweet from '../components/tweet/Tweet';
import DefaultLayout from '../config/layout/DefaultLayout';

function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Página inicial</h1>
        <Tweet user={false} />
      </DefaultLayout>
    </>
  );
}

export default Home;
