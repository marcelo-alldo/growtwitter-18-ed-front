import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import TweetProvider from './contexts/TweetsContext';

function App() {
  return (
    <>
      <DefaultTheme>
        <TweetProvider>
          <AppRoutes />
          <GlobalStyled />
        </TweetProvider>
      </DefaultTheme>
    </>
  );
}

export default App;
