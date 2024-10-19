import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        margin: 1,
        padding: 2,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        marginTop: "auto",
        borderRadius: "5px",
      }}
    >
      <Typography variant="p">
        Suggestions or ideas? Reach out by mail to{" "}
        <a href="mailto:asrivatsa6@gmail.com">asrivatsa6@gmail.com</a>.
      </Typography>
    </Box>
  );
};

export default Contact;
