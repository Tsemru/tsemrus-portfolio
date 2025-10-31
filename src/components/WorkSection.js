"use client";

import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function WorkSection() {
  const router = useRouter();
  const theme = useTheme();

  const workItems = [
    { title: "Genesis Systems", description: "Branding Project.", image: "/images/cover 2.jpg", route: "/genesis" },
    { title: "Oly Tech", description: "branding project.", image: "/images/cover 3.png", route: "/Oly" },
    { title: "Viva Games", description: "social meadia post designs", image: "/images/cover 1.jpg", route: "/viva" },
    { title: "AddisFly", description: "social meadia post designs", image: "/images/coverr.jpg", route: "/addisfly" },
    { title: "Logofolio", description: "Custom digital and hand-drawn art.", image: "/images/cover 6.jpg", route: "/Logofolio" },
   { title: "Photo Manipulation/Consept Art", description: "Posters, brochures, and marketing materials.", image: "/images/cover 4.jpg", route: "/PhotoManipulation" },
  ];

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 3, md: 6 },
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          textAlign: "center",
          color: theme.palette.text.primary,
          mb: 2,
        }}
      >
        My Work
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 300,
          textAlign: "center",
          color: theme.palette.text.secondary,
          mb: 10,
        }}
      >
        A selection of creative projects that showcase my skills in design, illustration, and branding.
      </Typography>

      {/* Grid of Work Cards */}
      <Grid container spacing={6} justifyContent="center">
        {workItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <motion.div
              style={{ width: "100%", maxWidth: 400, cursor: "pointer", position: "relative" }}
              onClick={() => router.push(item.route)}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  background: theme.palette.mode === "light"
                    ? "linear-gradient(135deg, rgba(1,5,12,0.7), rgba(39,44,88,0.5))"
                    : "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(20,20,20,0.5))",
                  backdropFilter: "blur(15px)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "200%",
                    height: "100%",
                    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
                    transition: "all 0.6s ease",
                  },
                  "&:hover::after": {
                    left: "100%",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 600,
                      color: "#fff",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 300,
                      color: "#ddd",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Behance Invite */}
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 500,
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          Want to see more of my work?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
          }}
          onClick={() => window.open("https://www.behance.net/tsemru", "_blank")}
        >
          Visit My Behance Portfolio
        </Button>
      </Box>
    </Box>
  );
}
