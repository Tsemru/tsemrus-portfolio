"use client";

import { Box, Typography, Button, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "60vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1000px",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: { xs: "0 0 auto", md: "0 0 40%" },
            width: { xs: "250px", md: "400px" },
            height: { xs: "300px", md: "400px" },
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/portrait 2.png"
            alt="Portrait"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Text */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "0 0 60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              textAlign: { xs: "center", md: "left" },
              color: "text.primary",
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Sora, sans-serif",
              textAlign: { xs: "center", md: "justify" },
              lineHeight: 1.7,
              color: "text.secondary",
            }}
          >
            {/* Hi, Im <b>Tsemru Fikremariam</b>, a 23-year-old self-taught artist and graphic designer with over 3 years of experience. I have a deep passion for artistic expression—whether through digital design, painting, or traditional art. My creative journey is driven by curiosity, emotion, and a desire to bring ideas to life visually. Although my background is in Information Systems (I hold a bachelor's degree), my heart has always been in art and design. I blend technical understanding with creative instincts to produce work thats both thoughtful and visually engaging. I'm constantly learning, growing, and pushing my limits. */}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
             <Button
  variant="contained"
  component={Link}
  href="/about"
  sx={{
    mt: 2,
    px: 5,
    py: 1.8,
    fontSize: "1.1rem",
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "10px",
    background: theme.palette.red.main,
    color: theme.palette.background.default,
    position: "relative",
    overflow: "hidden",
    transition: "all 0.5s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-150%",
      width: "200%",
      height: "100%",
      background: `linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)`,
      transition: "all 0.6s ease",
    },
    "&:hover": {
      "&::before": {
        left: "150%",
      },
      transform: "scale(1.05) translateY(-2px)",
      boxShadow: `0 8px 20px ${theme.palette.red.main}50`,
    },
  }}
>
  More About Me
</Button>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
