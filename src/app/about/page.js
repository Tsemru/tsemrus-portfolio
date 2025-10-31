"use client";

import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <Box
        id="about"
        sx={{
          width: "100%",
          minHeight: "70vh",
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, md: 6 },
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1000px",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 77%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Sora, sans-serif",
                textAlign: { xs: "center", md: "justify" },
                lineHeight: 1.7,
              }}
            >
              Hi, I&apos;m <b>Tsemru Fikremariam</b>, a 23-year-old self-taught artist
              and graphic designer with over 3 years of experience. I have a
              deep passion for artistic expression—whether through digital
              design, painting, or traditional art. My creative journey is
              driven by curiosity, emotion, and a desire to bring ideas to life
              visually. Although my background is in Information Systems (I hold
              a bachelor's degree), my heart has always been in art and design.
              I blend technical understanding with creative instincts to produce
              work that&apos;s both thoughtful and visually engaging. I'm constantly
              learning, growing, and pushing my limits.
            </Typography>

            {/* Download CV Button */}
            <Box sx={{ mt: 3, textAlign: { xs: "center", md: "left" } }}>
              <Button
                variant="contained"
                component="a"
                href="/images/cv.pdf"
                download="Tsemru_Fikremariam_CV.pdf"
                startIcon={<DownloadIcon />}
                sx={{
                  borderRadius: "10px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  fontFamily: "Sora, sans-serif",
                  background: "linear-gradient(90deg, #D32F2F, #FF6659)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(90deg, #FF6659, #D32F2F)",
                    transform: "scale(1.05) translateY(-2px)",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Work Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
