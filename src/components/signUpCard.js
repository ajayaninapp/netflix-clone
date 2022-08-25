import React from "react";
import Card from "@mui/material/Card";
import { Box, display, fontSize } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { emailValidate, passwordValidate } from "./validation/validation";
const SignUpCard = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPwdlValid, setIsPwdValid] = useState(true);
  const handleSubmit = () => {
    if (isEmailValid&&isPwdlValid) {
       localStorage.setItem(details.email,JSON.stringify(details))      
    }
  }
  const handleEmailValidation = (email) => {
    setIsEmailValid(emailValidate(email));
  };
  const handlePwdValidation = (password) => {
    setIsPwdValid(passwordValidate(password));
  };

  return (
    <Container maxWidth="sm" sx={{ marginX: "auto", marginTop: "8vh" }}>
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
          <Box sx={{ paddingTop: "40px" }}>
            <TextField
            error={!isEmailValid}
            helperText={isEmailValid?"":"Enter a valid email"}
              label="E-mail"
              sx={{ width: "100%" }}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              onBlur={(e) => handleEmailValidation(e.target.value)}
            />
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <TextField
            error={!isPwdlValid}
              label="Password"
              type='password'
              helperText={isPwdlValid?"":"Enter Password with atleast 8 charcters"}
              sx={{ width: "100%" }}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              onBlur={(e) => handlePwdValidation(e.target.value)}
            />
          </Box>
          <Button
            variant="outlined"
            sx={{
              background: "red",
              color: "white",
              width: "100%",
              height: "50px",
            }}
            onClick={handleSubmit(details)}
            
          >
            Next
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default SignUpCard;
