import { Box, Button, Input, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../../components/common/SideBar";
import { FaCloudUploadAlt } from "react-icons/fa";
import { v4 } from "uuid";
import { db, storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { query, getDocs, where } from "firebase/firestore";


export const PostComponent = () => {
  const [uploadFile, setUploadFile] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [video, setVide0] = useState('')

  const handleUpload = async () => {
    if (!uploadFile && !postDescription) {
      alert("Please upload an image or enter text before submitting.");
    } else {
      try {
        let postData = {};

        if (uploadFile) {
          const imageRef = ref(storage, `UploadImage/${v4()}`);
          const snapshot = await uploadBytes(imageRef, uploadFile);
          const downloadURL = await getDownloadURL(snapshot.ref);

          postData = {
            imageUrl: downloadURL,
            Post_Description: postDescription,
          };

          console.log(
            "Image uploaded successfully and URL added to Firestore!"
          );
        } else {
          // Handle the case where the user only uploads text
          postData = {
            Post_Description: postDescription,
          };

          console.log("Text added to Firestore!");
        }

        // Update Firestore with the data
        await addDoc(collection(db, "PostImage"), postData);
        setPostDescription("");
        setUploadFile("");
      } catch (error) {
        console.error("Error handling upload:", error.message);
      }
    }
  };


  const handleVideoClick = async () => {
    if (!video) {
      alert("Please enter a video key");
    } else {
      try {
        const videosRef = collection(db, "Videos");
        const videoQuery = await getDocs(query(videosRef, where("Video_Key", "==", video)));
  
        if (videoQuery.size === 0) {
          // Video key doesn't exist, add it to Firestore
          await addDoc(videosRef, { Video_Key: video });
          alert("Video key added successfully!");
          setVide0("");
        } else {
          // Video key already exists
          alert("Video key already exists. Please enter a unique video key.");
        }
      } catch (error) {
        console.error("Error handling video key:", error.message);
      }
    }
  };
  

  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Post
        </Typography>
        <Stack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={10}
          // mt={10}
        >
          <Box>
            <Typography ml={3} fontSize={20}>
              Upload Your File Here
            </Typography>
            <FaCloudUploadAlt style={{ width: "80%", height: "60%" }} />
            <Input
              type="file"
              placeholder="choose file"
              onChange={(e) => setUploadFile(e.target.files[0])}
            />
          </Box>
        </Stack>
        <Stack mt={5}>
          <Box>
            <Typography fontSize={20}>Post Text</Typography>
            <textarea
              placeholder="Write Some..."
              rows={10}
              cols={60}
              onChange={(e) => setPostDescription(e.target.value)}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="contained" onClick={handleUpload}>
              {" "}
              Submit
            </Button>
          </Box>
        </Stack>
        <Stack mt={5}>
          <TextField placeholder="Enter Video key here..." onChange={(e)=>setVide0(e.target.value)}/>
          <Box mt={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="contained" onClick={handleVideoClick}>Submit</Button>
          </Box>
        </Stack>
      </Stack>
      <SideBar />
    </Stack>
  );
};
