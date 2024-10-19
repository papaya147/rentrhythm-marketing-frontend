import { Box } from "@mui/material";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/building.jpg")',
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hero />
    </Box>
  );
};

export default App;
