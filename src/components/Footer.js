"use client";

import { Box, Typography, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 4,
        px: { xs: 3, md: 6 },
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `1px solid ${
          theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
        }`,
        mt: 8,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 400,
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 2, md: 0 },
        }}
      >
        © {new Date().getFullYear()} Tsemru Fikremariam. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <IconButton
          size="small"
          color="inherit"
          component="a"
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          color="inherit"
          component="a"
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="small" />
        </IconButton>

        <IconButton
          size="small"
          color="inherit"
          component="a"
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
