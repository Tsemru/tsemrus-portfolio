"use client";

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExperienceSection() {
  const theme = useTheme();

  const experiences = [
    {
      company: "Kazim Clothing",
      role: "Graphics Designer",
      duration: "2022 – 2023",
      description:
        "Designed clothing illustrations, branding materials, and promotional content. Helped develop a consistent visual identity that resonated with the brand’s audience.",
    },
    {
      company: "Anbessa IT",
      role: "Graphics Designer",
      duration: "2022 – 2023",
      description:
        "Created marketing designs, web visuals, and digital assets. Worked with the development team to ensure brand consistency across both print and digital platforms.",
    },
    {
      company: "Arif Studio",
      role: "Graphics Designer / Video Editor",
      duration: "2023 – Present",
      description:
        "Responsible for designing creative content and editing professional videos. Played a key role in developing marketing campaigns, combining visuals with storytelling for maximum impact.",
    },
    {
      company: "Viva Game",
      role: "Graphics Designer",
      duration: "2024 – Present",
      description:
        "Created marketing designs, web visuals, and digital assets. Worked with the development team to ensure brand consistency across both print and digital platforms.",
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        width: "100%",
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "870px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            color: theme.palette.text.primary,
          }}
        >
          Work Experience
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {experiences.map((exp, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: theme.palette.mode === "light" ? "#f9f9f9" : "#1a1a1a",
                color: theme.palette.text.primary,
                borderRadius: "12px",
                border: `1px solid ${theme.palette.divider}`,
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.red.main }} />}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                    {exp.role} | {exp.duration}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  {exp.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
