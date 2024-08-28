<<<<<<< HEAD
import DefaultTheme from "./config/theme/DefaultTheme";
import AppRoutes from "./routes/AppRoutes";
import '../src/App.css';
=======
import DefaultTheme from './config/theme/DefaultTheme';
import AppRoutes from './routes/AppRoutes';
>>>>>>> f4b6cd5cfe537520c8c408a039f24fbd0dc4df6e

function App() {
  return (
    <>
      <DefaultTheme>
        <AppRoutes />
      </DefaultTheme>
    </>
  );
}

export default App;
