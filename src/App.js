import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box>
      <CssBaseline/>
      <HeaderComponent />
      <HomePage />
      <FooterComponent />
    </Box>
  );
}

export default App;
