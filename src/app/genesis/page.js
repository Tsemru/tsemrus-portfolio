"use client";

import Footer from "@/components/Footer";
import GenesisColorsTypography from "@/components/GenesisColorsTypography";
import GenesisSocialMedia from "@/components/GenesisSocialMedia";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function Genesis() {
  const theme = useTheme();
  const router = useRouter();
  const gap = 16;

  const cardStyle = (ratio = "1/1") => ({
    width: "100%",
    aspectRatio: ratio,
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
    boxShadow: `0 2px 8px ${
      theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.5)"
    }`,
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
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}
        >
          About the Project
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, color: theme.palette.text.secondary }}
        >
          This is a branding project for a tech company called <b>Genesis</b>. The goal was to craft a modern and professional identity that reflects innovation, trust, and cutting-edge technology.
        </Typography>
      </Box>

      {/* Full-width Media */}
      <Card sx={{ ...cardStyle("16/9"), mb: 8 }}>
        <CardMedia component="img" image="/images/banner 1.jpg" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Card>

      {/* About Company + Media Side by Side */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 10, alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}>About the Company</Typography>
          <Typography variant="body1" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, color: theme.palette.text.secondary }}>
            Genesis is a forward-thinking tech company focused on providing innovative digital solutions. Their vision is to bridge technology with human experience, delivering products that are sleek, functional, and future-ready.
          </Typography>
        </Box>
        <Card sx={{ flex: 1, ...cardStyle("4/3") }}>
          <CardMedia component="img" image="/images/moc 11.png" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Card>
      </Box>

      {/* First Two 1:1 Cards */}
      <Box sx={{ display: "flex", gap: `${gap}px`, mb: 10, flexWrap: "wrap" }}>
        {["/images/moc 66.jpg", "/images/moc 1.png"].map((src, i) => (
          <Card key={i} sx={{ flex: 1, minWidth: "250px", ...cardStyle("1/1") }}>
            <CardMedia component="img" image={src} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Card>
        ))}
      </Box>

      {/* Logo Concept */}
      <Box sx={{ mb: 10, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}>Logo Concept</Typography>
        <Typography variant="body1" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, color: theme.palette.text.secondary }}>
          The Genesis logo symbolizes growth, connection, and innovation. Its geometric structure reflects technological precision, while the bold font conveys confidence and reliability.
        </Typography>
      </Box>

      {/* Full-width Media */}
      <Card sx={{ ...cardStyle("16/9"), mb: 8 }}>
        <CardMedia component="img" image="/images/how.png" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Card>

      {/* Grid of Images */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: `${gap}px`, justifyContent: "center", mb: 10 }}>
        {["/images/moc 8.png", "/images/moc 2.jpg", "/images/moc 3.jpg", "/images/moc 4.jpg", "/images/moc 5.jpg"].map((src, i) => (
          <Card key={i} sx={{ flex: "1 1 calc(33% - 16px)", minWidth: "250px", ...cardStyle("1/1") }}>
            <CardMedia component="img" image={src} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Card>
        ))}
      </Box>

      <GenesisColorsTypography/>
      <GenesisSocialMedia/>

      {/* Buttons Section */}
      <Box sx={{ mt: 10, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", gap: 3, alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={() => window.open("https://www.behance.net/", "_blank")}
          sx={{ width: { xs: "100%", sm: "200px" }, py: 1.5, fontFamily: "Sora, sans-serif", fontWeight: 600, borderRadius: 2 }}
        >
          More on Behance
        </Button>
        <Button
          variant="contained"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
          sx={{ width: { xs: "100%", sm: "200px" }, py: 1.5, fontFamily: "Sora, sans-serif", fontWeight: 600, borderRadius: 2 }}
        >
          See on Instagram
        </Button>
      </Box>

    </Box>
    <Footer />
    </>
  );
}
