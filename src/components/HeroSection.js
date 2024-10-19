import { Box, Container, Typography, Button } from "@mui/material";

const HeroSection = () => {
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
          width: "min(100vh, 100vw)",
          height: "min(100vh, 100vw)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            width: { xs: "90%", sm: "70%" }, // 90% on small screens, 50% on larger screens
          }}
        >
          <Typography variant="h3" gutterBottom>
            Supercharge your property management!
          </Typography>
          <Typography>
            Forget the hassle of hiring a property manager. We believe in a
            do-it-yourself approach where you're given options and the freedom
            to choose.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <a
              href="https://forms.gle/mfEeVuJSaksfEnCr5"
              target="_blank"
              rel="noopener noreferrer"
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
      </Box>
    </Box>
  );
};

export default HeroSection;
