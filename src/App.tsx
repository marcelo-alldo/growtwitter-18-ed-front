import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';
import './App.css';

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
