"use client";

import { Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import DevicesIcon from "@mui/icons-material/Devices";

// Custom styled progress bar using theme
const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 6,
  backgroundColor: theme.palette.mode === "light" ? "#e0e0e0" : "#333",
  "& .MuiLinearProgress-bar": {
    borderRadius: 6,
    backgroundColor: theme.palette.red.main, // use red accent from theme
  },
}));

// Skills data
const skills = [
  { name: "Adobe Photoshop", level: 95, icon: <BrushIcon /> },
  { name: "Adobe Illustrator", level: 85, icon: <DesignServicesIcon /> },
  { name: "Adobe Premiere Pro", level: 90, icon: <VideoLibraryIcon /> },
  { name: "Figma", level: 80, icon: <DevicesIcon /> },
  { name: "HTML / CSS", level: 90, icon: <CodeIcon /> },
  { name: "React / Next.js", level: 75, icon: <CodeIcon /> },
];

export default function SkillsSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 6 },
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "700px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            textAlign: "center",
            mb: 6,
          }}
        >
          My Skills
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {skills.map((skill, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  {skill.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Sora, sans-serif",
                      color: theme.palette.text.primary,
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, color: theme.palette.text.secondary }}
                >
                  {skill.level}%
                </Typography>
              </Box>
              <StyledProgress variant="determinate" value={skill.level} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
