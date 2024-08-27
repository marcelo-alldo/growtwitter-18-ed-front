import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: `#ffffff`,
    secondary: `#070707`,
    tertiary: `#1d9bf0`,
    quaternary: `#e9e9e9`,
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}
function DefaultTheme({ children }: DefaultThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultTheme;
