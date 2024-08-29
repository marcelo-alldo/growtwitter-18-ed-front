import DefaultTheme from "./config/theme/DefaultTheme";
import AppRoutes from "./routes/AppRoutes";
import '../src/App.css';

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
