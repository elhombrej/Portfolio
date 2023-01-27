import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from "./Components/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("dark");

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "dark" && {
        primary: {
          main: "#7986cb",
          background: "#eeeeee"
        },
        secondary: {
          main: "#f50057",
        },
      }),
      ...(mode === "light" && {
        primary: {
          main: "#303f9f",
        },
        secondary: {
          main: "#f50057",
        },
      }),

    },
  });

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkModeTheme}>

        <Routes>
          <Route path='/' element={<LandingPage mode={mode} setMode={setMode} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
