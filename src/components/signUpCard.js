import React from "react";
import Card from "@mui/material/Card";
import { Box, display, fontSize } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import { TextField } from '@mui/material';
const SignUpCard = () => {
  return (
    <Container maxWidth="sm"
      sx={{ marginX: "auto", marginTop: "8vh",   }}
    >
      <Card
        sx={{
          margin: "20px",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            paddingRight: "40px",
            paddingLeft: "40px",
            paddingY: "20px",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
            Create a password to start your membership
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "400", paddingTop: "20px" }}
          >
            Just a few more steps and you're done! We hate paperwork, too.
          </Typography>
          <Box sx={{paddingTop:'40px'}}>
            <TextField label='E-mail' sx={{width:'100%'}} />
          </Box>
          <Box sx={{paddingY:'10px'}}>
            <TextField label='Password' sx={{width:'100%'}} />
          </Box>
          <Button variant="outlined" sx={{background:'red',color:'white',width:'100%' ,height:'50px'}}>Next</Button>
        </Box>
      </Card>
    </Container>
  );
};

export default SignUpCard;
