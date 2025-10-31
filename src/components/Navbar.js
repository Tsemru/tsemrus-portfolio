"use client";

import { Paper, Toolbar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar({ mode, setMode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleProjectsClick = () => {
    if (pathname === "/") {
      // ✅ Already on homepage → scroll
      const section = document.getElementById("work-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // ✅ Go to homepage with hash → will auto scroll
      router.push("/#work-section");
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: (theme) => theme.shape.borderRadius,
        bgcolor: "background.paper",
        color: "text.primary",
        backdropFilter: "blur(10px)",
        border: (theme) =>
          mode === "light"
            ? "1px solid rgba(0,0,0,0.2)"
            : "1px solid rgba(255,255,255,0.2)",
        px: 1,
        py: 0.1,
        display: "flex",
        justifyContent: "center",
        zIndex: 1500,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "auto",
          p: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Home */}
        <IconButton
          size="small"
          color="inherit"
          onClick={() => router.push("/")}
        >
          <HomeIcon fontSize="small" />
        </IconButton>

        {/* Projects */}
        <IconButton size="small" color="inherit" onClick={handleProjectsClick}>
          <WorkIcon fontSize="small" />
        </IconButton>

        {/* Profile */}
        <IconButton
          size="small"
          color="inherit"
          onClick={() => router.push("/about")}
        >
          <AccountCircleIcon fontSize="small" />
        </IconButton>

        {/* Contact */}
        <IconButton
          size="small"
          color="inherit"
          onClick={() => router.push("/contact")}
        >
          <MailIcon fontSize="small" />
        </IconButton>

        {/* Theme Toggle */}
        <IconButton
          size="small"
          color="inherit"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <DarkModeIcon fontSize="small" />
          ) : (
            <LightModeIcon fontSize="small" />
          )}
        </IconButton>
      </Toolbar>
    </Paper>
  );
}
