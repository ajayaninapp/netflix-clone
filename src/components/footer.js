import React from "react";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

const footer = () => {
  const footerLinks = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    'Corporate Information'

  ];
  return (
    <div className="footer">
      <Container sx={{ padding: 10, color: "white" }}>
        <Typography sx={{ fontSize: "12px" }}>
          Questions? Call 000-800-040-1843
        </Typography>
        <Grid container sx={{ paddingTop: "10px" }}>

            {footerLinks.map((footerLink)=>(
                <Grid item xs={6} md={4} lg={3}>
                <Typography sx={{ fontSize: "12px",padding:2 }}>{footerLink}</Typography>
              </Grid>

            ))}
          


        </Grid>
      </Container>
    </div>
  );
};

export default footer;
