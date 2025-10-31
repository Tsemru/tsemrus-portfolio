"use client";

import { createTheme } from "@mui/material/styles";
import "@fontsource/sora"; // Import Sora globally

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode
          primary: { main: "#000000" },
          secondary: { main: "#444444" },
          red: { main: "#e53935" }, // new red accent color
          background: { default: "#ffffff", paper: "#f9f9f9" },
          text: { primary: "#111111", secondary: "#555555" },
          gradients: {
            main: ["#000000", "#e53935", "#444444"], // gradient colors for hero/background
          },
        }
      : {
          // Dark mode
          primary: { main: "#ffffff" },
          secondary: { main: "#bbbbbb" },
          red: { main: "#ff5252" }, // red accent in dark mode
          background: { default: "#000000", paper: "#1a1a1a" },
          text: { primary: "#f5f5f5", secondary: "#aaaaaa" },
          gradients: {
            main: ["#ffffff", "#ff5252", "#bbbbbb"], // gradient colors for hero/background
          },
        }),
  },
  typography: {
    fontFamily: "Sora, sans-serif", // Use Sora everywhere
    h1: { fontWeight: 700, fontSize: "6rem", letterSpacing: "-2px" },
    h2: { fontWeight: 500, fontSize: "2rem" },
  },
  shape: { borderRadius: 12 },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.1)",
    "0px 4px 8px rgba(0,0,0,0.15)",
    "0px 6px 12px rgba(0,0,0,0.2)",
    ...Array(21).fill("none"),
  ],
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
