import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../components/common/SideBar";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const TermsAndCondition = () => {
    const [termsCondition, setTermsCondition] = useState('')

    const handleSubmit = async()=>{
        if(termsCondition == ""){
            alert("please fill Terms And Condition Description")
        }
        else{
            await setDoc(doc(db, "TermsAndCondition", "smit Terms"), {
                Description: termsCondition,
              });
        }
    }
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack mt={"5%"}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Terms And Conditions
        </Typography>
      </Stack>
      <Stack sx={{ marginTop: "5%" }}>
        <textarea
          placeholder="Write Terms And Conditions"
          rows={10}
          cols={60}
          onChange={(e) => setTermsCondition(e.target.value)}
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
