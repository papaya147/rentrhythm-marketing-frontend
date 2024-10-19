import { Box } from "@mui/material";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from "react";

const App = () => {
  const [isVhGreaterThanVw, setIsVhGreaterThanVw] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      setIsVhGreaterThanVw(vh > vw);
      console.log(isVhGreaterThanVw);
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [isVhGreaterThanVw]);

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
      <Box
        sx={{
          width: isVhGreaterThanVw ? "100vw" : "60vw",
          height: isVhGreaterThanVw ? "50vh" : "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Hero />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: isVhGreaterThanVw ? "0" : "60vw",
          top: isVhGreaterThanVw ? "50vh" : "0",
          width: isVhGreaterThanVw ? "100vw" : "40vw",
          height: isVhGreaterThanVw ? "50vh" : "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FeatureSection />
      </Box>
    </Box>
  );
};

export default App;
