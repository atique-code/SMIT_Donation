import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import SideBar from "../../components/common/SideBar";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const RequestComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Request'));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (rowId, newStatus) => {
    try {
      const docRef = doc(db, 'Request', rowId);
      await updateDoc(docRef, {
        status: newStatus,
      });
      console.log(`Status for row ${rowId} updated to ${newStatus}`);
      fetchData(); // Refresh the data after updating the status
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <Grid container>
      <Grid item md={3}>
        <SideBar />
      </Grid>

      <Grid
        item
        md={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" fontSize={24} fontWeight={"bold"}> Users Request</Typography>

        <TableContainer component={Paper} sx={{ width: "80%", marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Request Type</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.fName}</TableCell>
                  <TableCell>{row.userRequest}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <FormControl>
                      <Select
                        value={row.status}
                        onChange={(event) =>
                          handleStatusChange(row.id, event.target.value)
                        }
                        sx={{
                          backgroundColor:
                            row.status === "Approve"
                              ? "#4CAF50"
                              : row.status === "Reject"
                              ? "#FF5252"
                              : "white",
                              color: "black",
                              fontSize: 18,
                              fontWeight: "500",
                            
                        }}
                        displayEmpty
                        inputProps={{ "aria-label": "Select an option" }}
                      >
                        <MenuItem value="" disabled>
                          Select an option
                        </MenuItem>
                        <MenuItem value="Approve">Approve</MenuItem>
                        <MenuItem value="Reject">Reject</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
