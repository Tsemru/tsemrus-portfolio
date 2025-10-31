"use client";

import { Box, Typography, Card, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function GenesisSocialMedia() {
  const theme = useTheme();
  const gap = 16; // consistent spacing

  const twoColumnWidth = `calc((100% - ${gap}px) / 2)`;
  const threeColumnWidth = `calc((100% - ${gap * 2}px) / 3)`;
  const cardStyle = (width, aspect = "1/1") => ({
  width,
  aspectRatio: aspect,
  borderRadius: 2,
  overflow: "hidden",
});

  return (
    <Box
      sx={{
        mt: 12,
        px: { xs: 3, md: 6 },
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Section Title */}
      <Box sx={{ mb: 8, textAlign: "center", maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}
        >
          Social Media Designs
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300 }}
        >
          A collection of branded social media visuals created for Genesis, 
          blending clean layouts with bold typography and brand colors. 
          These designs were crafted to maintain a consistent identity 
          across digital platforms.
        </Typography>
      </Box>

      {/* Grid Layout (2-3-2 for variety) */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: `${gap}px`,
          justifyContent: "center",
        }}
      >
        {/* Row 1: 2 images */}
        <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/oly/oly print what 1.jpg" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/oly/OLy random post 3.jpg" sx={imageStyle} />
        </Card>

        {/* Row 2: 3 images */}
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/oly/OLy Why Your Brand Color is Lying 1.jpg" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/oly/OLy random post 1.jpg" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/oly/OLy we print we design.jpg" sx={imageStyle} />
        </Card>

        {/* Row 3: 2 images */}
        <Card sx={cardStyle(twoColumnWidth, "4/5")}>
  <CardMedia
    component="img"
    image="/images/oly/OLy random post 8.jpg"
    sx={imageStyle}
  />
</Card>
<Card sx={cardStyle(twoColumnWidth, "4/5")}>
  <CardMedia
    component="img"
    image="/images/oly/OLy random post 7.jpg"
    sx={imageStyle}
  />
</Card>
      </Box>
    </Box>
  );
}

// Styles
const cardStyle = (width) => ({
  width,
  aspectRatio: "1/1",
  borderRadius: 2,
  overflow: "hidden",
});

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
