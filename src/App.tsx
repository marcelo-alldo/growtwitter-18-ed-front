import DefaultTheme from "./config/theme/DefaultTheme";
import AppRoutes from "./routes/AppRoutes";


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
