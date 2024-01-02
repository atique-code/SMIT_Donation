import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../components/common/SideBar";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const PrivacyAndPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const handleSubmit = async () => {
    if (privacyPolicy == "") {
      alert("please fill Terms And Condition Description");
    } else {
      await setDoc(doc(db, "PrivacyPolicy", "appPrivacy"), {
        Description: privacyPolicy,
      });
    }
  };
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack mt={"5%"}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Privacy And Policy
        </Typography>
      </Stack>
      <Stack sx={{ marginTop: "5%" }}>
        <textarea
          placeholder="Write Privacy And Policy.."
          rows={10}
          cols={60}
          onChange={(e) => setPrivacyPolicy(e.target.value)}
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
