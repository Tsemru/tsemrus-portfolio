"use client";

import Footer from "@/components/Footer";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function Viva() {
  const theme = useTheme();
  const router = useRouter();
  const gap = 16; // gap between cards in px

  // calculate widths so rows fill exactly
  const twoColumnWidth = `calc((100% - ${gap}px) / 2)`;
  const threeColumnWidth = `calc((100% - ${gap * 2}px) / 3)`;

  // First Grid: 10 images (sequence 3-2-2-3)
  const firstGridImages = [
    { src: "/images/viva/viva 31.jpg", width: "three" },
    { src: "/images/viva/viva 32.jpg", width: "three" },
    { src: "/images/viva/viva 21.jpg", width: "three" },
    { src: "/images/viva/viva 77.jpg", width: "two" },
    { src: "/images/viva/viva 94.jpg", width: "two" },
    { src: "/images/viva/viva 97.jpg", width: "two" },
    { src: "/images/viva/viva 99.jpg", width: "two" },
    { src: "/images/viva/viva 107.jpg", width: "three" },
    { src: "/images/viva/viva 96.jpg", width: "three" },
    { src: "/images/viva/viva 65.jpg", width: "three" },
  ];

  // Second Grid: 5 images (sequence 2-3)
  const secondGridImages = [
    { src: "/images/viva/viva 109.jpg", width: "two" },
    { src: "/images/viva/viva 59.jpg", width: "two" },
    { src: "/images/viva/viva 58.jpg", width: "three" },
    { src: "/images/viva/viva 113.jpg", width: "three" },
    { src: "/images/viva/viva 115.jpg", width: "three" },
  ];

  // helper function for card style
  const cardStyle = (width, ratio = "1/1") => ({
    width: width === "two" ? twoColumnWidth : threeColumnWidth,
    aspectRatio: ratio,
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
    flexShrink: 0,
    boxShadow: `0 2px 8px ${
      theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.5)"
    }`,
    "&:hover::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "200%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
      animation: "shimmer 1s forwards",
    },
  });

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
      {/* About Project */}
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
          About the Project
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          Viva Game is a promotional project created for a betting company. The
          goal was to design bold, engaging visuals that capture the excitement
          of betting games and connect with social media audiences.
        </Typography>
      </Box>

      {/* First Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: `${gap}px`,
          justifyContent: "center",
          mb: 6,
        }}
      >
        {firstGridImages.map((img, i) => (
          <Card key={i} sx={cardStyle(img.width, "1/1")}>
            <CardMedia
              component="img"
              image={img.src}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        ))}
      </Box>
      <Box sx={{ mb: 8, maxWidth: "800px", mx: "auto", textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 300,
            textAlign: "justify",
            color: theme.palette.text.secondary,
          }}
        >
          Some parts of the project used AI-assisted tools to generate models
          and creative variations. These were refined and adapted into the final
          designs, helping the campaign stand out and promote the betting games
          with a modern and dynamic look.
        </Typography>
      </Box>

      {/* Second Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: `${gap}px`,
          justifyContent: "center",
        }}
      >
        {secondGridImages.map((img, i) => (
          <Card key={i} sx={cardStyle(img.width, "4/5")}>
            <CardMedia
              component="img"
              image={img.src}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        ))}
      </Box>

      {/* Shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>

      {/* Buttons Section */}
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 3,
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => window.open("https://www.behance.net/", "_blank")}
          sx={{
            width: { xs: "100%", sm: "200px" },
            py: 1.5,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            borderRadius: 2,
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          More on Behance
        </Button>
        <Button
          variant="contained"
          onClick={() => router.push("/Logofolio")}
          sx={{
            width: { xs: "100%", sm: "200px" },
            py: 1.5,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            borderRadius: 2,
            "&:hover": {
              bgcolor: theme.palette.primary.dark || theme.palette.primary.main,
            },
          }}
        >
          Next
        </Button>
      </Box>

      
    </Box>
    <Footer />
    </>
  );
}
