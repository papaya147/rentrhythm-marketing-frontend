import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Feature = ({ title, para }) => {
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
    <Card
      sx={{
        width: isVhGreaterThanVw ? "90vw" : "35vw",
        height: isVhGreaterThanVw ? "25vh" : "20vh",
        margin: 2,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{para}</Typography>
      </CardContent>
    </Card>
  );
};

export default Feature;
