import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';

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
