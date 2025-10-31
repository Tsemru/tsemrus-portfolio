"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";
import { createAppTheme } from "../theme";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar mode={mode} setMode={setMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
