"use client";

import { Box, Typography, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function OlyColorsTypography() {
  const theme = useTheme();

  const colors = [
    { name: "Primary Green", hex: "#25f34bff" },
    { name: "Accent Blue", hex: "#2c47f7ff" },
  ];

  const fontSamples = [
    { label: "Light", weight: 300 },
    { label: "Regular", weight: 400 },
    { label: "Medium", weight: 500 },
    { label: "Bold", weight: 700 },
    { label: "Black", weight: 900 },
  ];

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
          Colors & Typography
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 300 }}
        >
          The Genesis identity relies on bold colors and a versatile type system. 
          These visual elements ensure consistency across digital and print media.
        </Typography>
      </Box>

      {/* Colors Section */}
      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 600, mb: 4 }}
        >
          Color Palette
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {colors.map((color, i) => (
            <Card
              key={i}
              sx={{
                p: 0,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: color.hex,
                  height: 160,
                  width: "100%",
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography
                  sx={{ fontFamily: "Sora, sans-serif", fontWeight: 600 }}
                >
                  {color.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    color: "text.secondary",
                  }}
                >
                  {color.hex}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Typography Section */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Sora, sans-serif", fontWeight: 600, mb: 4 }}
        >
          Typography
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {fontSamples.map((font, i) => (
            <Card
              key={i}
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: font.weight,
                  fontSize: { xs: 28, md: 40 },
                  width: "100%",
                }}
              >
                Helvetica — {font.label}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
