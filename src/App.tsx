import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <DefaultTheme>
        <AppRoutes />
        <GlobalStyled />
      </DefaultTheme>
    </>
  );
}

export default App;
