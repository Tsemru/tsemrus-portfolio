"use client";

import Footer from "@/components/Footer";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Logofolio() {
  const theme = useTheme();

  const logos = [
  {
    img: "/images/logo/logo9.jpg",
    desc: "Oly Tech — Blending printing, design, and web development to craft bold, modern brand experiences that connect businesses with the digital world."
  },
  {
    img: "/images/logo/logo8.jpg",
    desc: "Fenani Trading — Representing global movement and opportunity through trusted import-export services built on strong international connections."
  },
  {
    img: "/images/logo/logo7.jpg",
    desc: "Menata Hotel — A symbol of modern hospitality, offering comfort, warmth, and cultural elegance for a luxurious stay that feels like home."
  },
  {
    img: "/images/logo/logo10.jpg",
    desc: "Yearbook Ethiopia — A digital platform connecting Ethiopian college students through stories, memories, and a shared sense of community."
  },
  {
    img: "/images/logo/logo6.jpg",
    desc: "Genesis Systems — Innovating software solutions that transform complex ideas into smart, user-focused digital experiences."
  },
  {
    img: "/images/logo/logo111.jpg",
    desc: "Addis Bridge — Connecting dreams with destinations through expert visa consultancy built on clarity, trust, and global insight."
  },
  {
    img: "/images/logo/logo4.jpg",
    desc: "Arif Advertising — Blending creativity and strategy to help brands stand out with bold ideas that inspire and captivate audiences."
  },
  {
    img: "/images/logo/logo2.jpg",
    desc: "Brana SaaS — Empowering learning through accessible, tech-driven education that merges innovation and knowledge for the future."
  },
  {
    img: "/images/logo/logo1.jpg",
    desc: "Zamar Bar & Restaurant — Capturing the energy of good food, music, and community for people who love flavor, fun, and unforgettable moments."
  }
];


  return (
    <>
    <Box
      sx={{
        pt: 20,
        px: { xs: 3, md: 6 },
        bgcolor: theme.palette.background.default,
        overflowX: "hidden",
      }}
    >
      {/* About Page */}
      <Box sx={{ mb: 10, maxWidth: "800px", mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            mb: 2,
            color: theme.palette.text.primary,
          }}
        >
          Logofolio
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          A curated collection of logos Ive designed. Each piece blends creativity and brand identity to communicate a unique story.
        </Typography>
      </Box>

      {/* Vertical Logo Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
        {logos.map((logo, i) => (
          <Box key={i} sx={{ width: { xs: "100%", md: "60%" }, textAlign: "center" }}>
            <Card
              sx={{
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: `0 2px 8px ${
                  theme.palette.mode === "light"
                    ? "rgba(0,0,0,0.1)"
                    : "rgba(0,0,0,0.5)"
                }`,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <CardMedia
                component="img"
                image={logo.img}
                sx={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Card>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                fontFamily: "Sora, sans-serif",
                fontWeight: 500,
                color: theme.palette.text.secondary,
              }}
            >
              {logo.desc}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Buttons Section */}
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 3,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* More on Behance */}
        <Box
          component="button"
          onClick={() => window.open("https://www.behance.net/", "_blank")}
          sx={{
            width: { xs: "100%", sm: "200px" },
            py: 1.5,
            bgcolor: "transparent",
            color: theme.palette.primary.main,
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 2,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          More on Behance
        </Box>

        {/* Next Button */}
        <Box
          component="button"
          onClick={() => alert("Go to next project")}
          sx={{
            width: { xs: "100%", sm: "200px" },
            py: 1.5,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            border: "none",
            borderRadius: 2,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { bgcolor: theme.palette.primary.dark || theme.palette.primary.main },
          }}
        >
          Next
        </Box>
      </Box>

      
    </Box>
    <Footer />
    </>
  );
}
