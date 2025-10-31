"use client";

import Footer from "@/components/Footer";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function PhotoManipulation() {
  const theme = useTheme();

  // Gap between cards
  const gap = 16; // 16px gap

  // Functions to calculate widths precisely
  const twoColumnWidth = `calc((100% - ${gap}px) / 2)`;
  const threeColumnWidth = `calc((100% - ${gap * 2}px) / 3)`;

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
        <Typography variant="h3" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}>
          About the Project
        </Typography>
       <Typography
  variant="body1"
  sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300,  }}
>
  This photo manipulation project began as an exploration of how photography
  and digital art can blend to create bold, surreal visuals. Each composition
  pushes contrast, texture, and mood to transform ordinary images into
  striking stories.
</Typography>
      </Box>
      <Card
  sx={{
    width: "100%",
    aspectRatio: "16/9",
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
  }}
>
  <CardMedia
    component="img"
    image="/images/Mockup.jpg"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</Card>
<Box sx={{ maxWidth: "800px", mx: "auto", my: 8 }}>
  <Typography
    variant="body1"
    sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, textAlign: "justify" }}
  >
    What started out as a personal passion project quickly grew into something
    bigger. Over time, the artworks developed into curated collections and
    limited prints, each capturing different moods and visual themes. This
    journey turned experimentation into a body of work that people could
    connect with, collect, and experience in new ways.
  </Typography>
</Box>

      {/* Photo Manipulation Grid: 2-3-2-3 sequence */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: `${gap}px`, justifyContent: "center", mb: 6 }}>
        {/* Row 1: 2 items */}
        <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/lions.jpg" sx={imageStyle} />
        </Card>
        

         <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/the gateway.png" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/22.png" sx={imageStyle} />
        </Card>{/* Row 2: 3 items */}
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/33.png" sx={imageStyle} />
        </Card>
       
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/0.jpg" sx={imageStyle} />
        </Card>

        {/* Row 3: 2 items */}
        <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/deep breathe.png" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(twoColumnWidth)}>
          <CardMedia component="img" image="/images/01.jpg" sx={imageStyle} />
        </Card>

        {/* Row 4: 3 items */}
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/02.jpg" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/03.jpg" sx={imageStyle} />
        </Card>
        <Card sx={cardStyle(threeColumnWidth)}>
          <CardMedia component="img" image="/images/04.jpg" sx={imageStyle} />
        </Card>
      </Box>
      <Box sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}>
  <Typography
    variant="body1"
    sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, textAlign: "justify" }}
  >
    You can explore more of this project and other collections on my Instagram
    and Behance pages. Each platform showcases different angles of the creative
    process, from early concepts to full series, giving a deeper look into the
    work beyond what’s shown here.
  </Typography>

  
</Box>
<Card
  sx={{
    aspectRatio: "16/9",
    width: "100%",
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
  }}
>
  <CardMedia
    component="img"
    image="/images/Free Canvas Mockup.jpg"
    sx={{
      width: "100%",
      objectFit: "cover",
    }}
  />
</Card>

      {/* Shimmer keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
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

// Styles
const cardStyle = (width) => ({
  width,
  aspectRatio: "4/5",
  borderRadius: 2,
  overflow: "hidden",
  position: "relative",
  flexShrink: 0,
  "&:hover::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "200%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
    animation: "shimmer 1s forwards",
  },
});

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
