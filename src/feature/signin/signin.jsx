import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Input } from "../../components/common/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const SiginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin =()=>{
        signInWithEmailAndPassword(auth, email, password).then((res)=>{
            console.log("signIn Successfully")
            navigate("/Home")
            
        }).catch((error)=>{
            alert(error)
        })
    }
  return (
    <Stack>
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
          <Typography variant="h5" color={"blueviolet"} fontWeight={'600'} fontFamily={'sans-serif'} gutterBottom >
            Sign In
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
            <Button variant="contained" onClick={handleSignin} fullWidth>
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
