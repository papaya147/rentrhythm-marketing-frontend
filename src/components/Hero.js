import { Box, Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVhGreaterThanVw, setIsVhGreaterThanVw] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      setIsVhGreaterThanVw(vh > vw);
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [isVhGreaterThanVw]);

  return (
    <Container
      sx={{
        width: { xs: "95%", sm: "75%" },
      }}
    >
      <Typography variant="h3" gutterBottom>
        Supercharge your property management!
      </Typography>
      <Typography>
        Forget the hassle of hiring a property manager. We believe in a
        do-it-yourself approach where you're given options and the freedom to
        choose.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <a
          href="https://forms.gle/mfEeVuJSaksfEnCr5"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "darkgray",
              },
            }}
          >
            Register Now
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default Hero;
