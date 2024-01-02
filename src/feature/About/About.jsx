import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../components/common/SideBar";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
// import Alert from "@mui/material/Alert";

export const About = () => {
  const [submitAbout, setSubmitAbout] = useState("");
  const handleSubmit = async () => {
    if (submitAbout === "") {
        alert("Please Fill the description")
    } else {
      await setDoc(doc(db, "SMITAbout", "smit"), {
        Description: submitAbout,
      });
      console.log("Submit about");
    }
  };
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack mt={"5%"}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          About
        </Typography>
      </Stack>
      <Stack sx={{ marginTop: "5%" }}>
        <textarea
          placeholder="Write About Saylani welfare"
          rows={10}
          cols={60}
          onChange={(e) => setSubmitAbout(e.target.value)}
        />
      </Stack>
      <Stack mt={3}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
      <SideBar />
    </Stack>
  );
};
