"use client";

import { Box, Typography, Button } from "@mui/material";

export default function SocialMediaDesigns() {
  const images = [
    "/images/viva 31.jpg",
    "/images/viva 32.jpg",
    "/images/viva 46.jpg",
    "/images/viva 77.jpg",
    "/images/viva 97.jpg",
    "/images/viva 99.jpg",
    "/images/viva 107.jpg",
    "/images/viva 94.jpg",
  ];

  return (
    <Box
      sx={{
        py: 16, // more vertical space
        px: { xs: 4, md: 10 }, // more horizontal padding
        background: "linear-gradient(135deg, #f2f2f2ff, #e0e0e0ff)",
        textAlign: "center",
        position: "relative",
        overflow: "visible", // allow hover to escape
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          color: "#171717ff",
          mb: 2,
        }}
      >
        Social Media Designs
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 300,
          color: "#171717ff",
          mb: 11,
        }}
      >
        Engaging visuals crafted to boost your digital presence and connect with audiences.
      </Typography>

      {/* Company Name */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 500,
          color: "#1e1e1eff",
          mb: 10,
        }}
      >
        Designed for OLY Creative Studio
      </Typography>

      {/* Scattered + Rotated Images */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          gap: 0,
          px: 4, // more horizontal space
          overflowX: "visible", // prevent cropping on hover
          overflowY: "visible",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            sx={{
              flex: "0 0 auto",
              width: "260px",
              height: "500px",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              marginLeft: i === 0 ? 0 : "-80px",
              transform: `rotate(${i % 2 === 0 ? 0 : 0}deg)`,
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              transition: "all 0.6s ease",
              zIndex: i + 1,
              "&:hover": {
                width: "500px",
                height: "500px",
                transform: "rotate(0deg) scale(1.4) translateY(0%)",
                zIndex: 9999,
                marginLeft: i === 0 ? 0 : "-40px",
                boxShadow: "0px 20px 80px rgba(0,0,0,0.9)",
              },
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`Design ${i + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.6s ease",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Behance Button */}
      <Button
  variant="contained"
  onClick={() => window.open("https://www.behance.net/", "_blank")}
  sx={{
    mt: 6,
    px: 5,
    py: 1.8,
    fontSize: "1.1rem",
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #0b0b0bff, #2c2c2cff)", // bold gradient
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0px 8px 25px rgba(188, 146, 138, 0.4)",
    transition: "all 0.4s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #5a5958ff, #40a0ffff)",
      boxShadow: "0px 12px 35px rgba(184, 245, 255, 0.6)",
      transform: "scale(1.08) translateY(-4px)",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-150%",
      width: "200%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
      transition: "all 0.6s ease",
    },
    "&:hover::before": {
      left: "150%",
    },
  }}
>
  More on Behance
</Button>
    </Box>
  );
}
