import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { db } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Input } from "../../components/common/input";
// import { CustomizeButton } from '../../components/common/customizeButton';

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("signup Successfully");
    createUserWithEmailAndPassword(db, email, password)
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        maxHeight: "600px",
        minHeight: "100vh",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
        p={3}
        border="1px solid #ccc"
        borderRadius={8}
        boxShadow={3}
      >
        <Typography
          variant="h5"
          color={"blueviolet"}
          fontWeight={"600"}
          fontFamily={"sans-serif"}
          gutterBottom
        >
          Sign Up
        </Typography>

        <Box mt={3}>
          <Input
            label="Username or Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            sx={{ width: "100%" }}
          />
        </Box>

        <Box mt={2}>
          <Input
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>
        <Box my={2}>
          <Button variant="contained" onClick={handleSignup} fullWidth>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
