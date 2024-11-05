import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import TweetProvider from './contexts/TweetsContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DefaultTheme>
            <TweetProvider>
              <AppRoutes />
              <GlobalStyled />
            </TweetProvider>
          </DefaultTheme>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
