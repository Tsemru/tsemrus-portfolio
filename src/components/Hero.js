"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Big "Portfolio" Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
            fontWeight: 800,
            lineHeight: 1.1,
            fontFamily: "Sora, sans-serif",
          }}
        >
          Tsemru
          Fikremariam
        </Typography>
      </motion.div>

      {/* Your Name Below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "0.5rem", md: "1.5rem" },
            fontWeight: 500,
            mt: 0,
            fontFamily: "Sora, sans-serif",
          }}
        >
          Graphic Designer -{" "}
          <Box
            component="span"
            sx={{
              backgroundColor: theme.palette.red.main,
              color: theme.palette.background.default,
              px: 1,
              borderRadius: 0,
            }}
          >
            Portfolio 
          </Box>
        </Typography>
      </motion.div>
    </Box>
  );
}
