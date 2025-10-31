"use client";

import { Box, Typography, Card, CardContent, IconButton, Grid, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

export default function ContactPage() {
  const theme = useTheme();

  const contactItems = [
    { title: "Phone", icon: <PhoneIcon />, value: "+251 9XX XXX XXX" },
    { title: "Email", icon: <EmailIcon />, value: "youremail@email.com" },
    { title: "Name", icon: <PersonIcon />, value: "Tsemru Fikremariam" },
    { title: "WhatsApp", icon: <WhatsAppIcon />, value: "+251 9XX XXX XXX" },
    { title: "Telegram", icon: <TelegramIcon />, value: "@yourusername" },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: "https://instagram.com/", color: "#E1306C" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com/", color: "#0077B5" },
    { icon: <TelegramIcon />, href: "https://t.me/", color: "#0088cc" },
    { icon: <WhatsAppIcon />, href: "https://wa.me/", color: "#25D366" },
  ];

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 3, md: 6 },
        textAlign: "center",
        color: "text.primary",
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        sx={{ fontFamily: "Sora, sans-serif", fontWeight: 700, mb: 2 }}
      >
        Contact Me ✨
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 400,
          color: "text.secondary",
          mb: 6,
        }}
      >
        Let’s build something amazing together 🚀
      </Typography>

      {/* Contact Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
        {contactItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                borderRadius: 3,
                background:
                  theme.palette.mode === "light"
                    ? "#f9f9f9"
                    : "#1a1a1a",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <IconButton
                sx={{
                  mb: 1,
                  bgcolor: theme.palette.red.main,
                  color: "#fff",
                  "&:hover": { bgcolor: theme.palette.red.main },
                }}
              >
                {item.icon}
              </IconButton>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                {item.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Social Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        {socialLinks.map((link, idx) => (
          <IconButton
            key={idx}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.primary",
              "&:hover": { color: link.color, transform: "scale(1.2)" },
              transition: "0.3s",
            }}
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
