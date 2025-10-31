"use client";

import Footer from "@/components/Footer";
import OlyColorsTypography from "@/components/OlyColorsTypography";
import OlySocialMedia from "@/components/OlySocialMedia";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function Oly() {
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
          This branding project for Oly was all about crafting a bold and versatile visual identity that captures creativity and confidence. From concept to final design, the focus was on building a clean, modern look that stands out across digital and print materials. The project included developing the logo, color system, and brand visuals to create a strong, consistent identity that reflects innovation and design clarity.
        </Typography>
      </Box>

      {/* Full-width Media */}
      <Card sx={{ ...cardStyle("16/9"), mb: 8 }}>
        <CardMedia component="img" image="/images/Oly/Slide1.png" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Card>

      {/* About Company + Media Side by Side */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 10, alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}>About the Company</Typography>
          <Typography variant="body1" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, color: theme.palette.text.secondary }}>
            Founded in 2019, OLY Technology is a professional services and trading company based in Addis Ababa with a branch in Mekele. They provide innovative solutions across graphic design, printing, marketing, software development, and import/export. With a focus on quality, reliability, and growth, they guide businesses from concept to success through expertise, creativity, and cutting-edge technology.
             </Typography>
        </Box>
        <Card sx={{ flex: 1, ...cardStyle("4/3") }}>
          <CardMedia component="img" image="/images/Oly/oly 9.png" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Card>
      </Box>

      {/* First Two 1:1 Cards */}
      <Box sx={{ display: "flex", gap: `${gap}px`, mb: 10, flexWrap: "wrap" }}>
        {["/images/oly/oly 7.jpg", "/images/oly/oly 8.png"].map((src, i) => (
          <Card key={i} sx={{ flex: 1, minWidth: "250px", ...cardStyle("1/1") }}>
            <CardMedia component="img" image={src} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Card>
        ))}
      </Box>

      {/* Logo Concept */}
      <Box sx={{ mb: 10, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}>Logo Concept</Typography>
        <Typography variant="body1" sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300, color: theme.palette.text.secondary }}>
          The OLY Technology logo combines clean, geometric shapes to form an abstract “O” that reflects the brand name while symbolizing unity and connection. Its modular structure represents the company’s diverse services, from technology and design to trading, all integrated into one cohesive vision. The intersecting white spaces create a sense of direction and movement, embodying OLY’s role as a roadmap for client success. The green and blue palette blends the ideas of growth, trust, stability, and innovation, capturing the balance between creativity and technology that defines the brand.
        </Typography>
      </Box>

      {/* Full-width Media */}
      <Card sx={{ ...cardStyle("16/9"), mb: 8 }}>
        <CardMedia component="img" image="/images/oly/A4.png" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Card>

      {/* Grid of Images */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: `${gap}px`, justifyContent: "center", mb: 10 }}>
        {["/images/oly/oly 1.jpg", "/images/oly/oly 2.jpg", "/images/oly/oly 3.jpg", "/images/oly/oly 6.jpg", "/images/oly/A5.png"].map((src, i) => (
          <Card key={i} sx={{ flex: "1 1 calc(33% - 16px)", minWidth: "250px", ...cardStyle("1/1") }}>
            <CardMedia component="img" image={src} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Card>
        ))}
      </Box>

      <OlyColorsTypography/>
      <OlySocialMedia/>

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
