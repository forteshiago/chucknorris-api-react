import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import Main from "./components/Main";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
