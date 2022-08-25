import { Container, Grid, Box, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

const Banner = ({ movie }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            sm={7}
            xs={12}
            sx={{ color: "white", margin: "5%", padding: 0, margin: 0 }}
          >
            <Box sx={{ paddingTop: "15%" }}>
              <Typography sx={{ fontSize: "50px", fontWeight: "600" }}>
                {movie.name}
              </Typography>
              <Typography sx={{ paddingY: "5%" }}>
                2017 | A | 5 Seasons | Crime TV Shows
              </Typography>
              <Typography>{movie.overview}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
