// import React, { useState } from "react";
// import  SideBar  from "../../components/common/SideBar";
// import { Button, Stack, Typography } from "@mui/material";
// import { FaBriefcaseMedical } from "react-icons/fa";
// import { IoFastFoodSharp } from "react-icons/io5";
// import { MdAttachMoney } from "react-icons/md";

// export const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleToggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//     <Stack sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center",marginLeft: "15%", marginTop: "10%", flexDirection: "row"}}>
//       <Stack bgcolor={"blue"} borderRadius={5}>
//         <Stack display={"flex"} justifyContent={"space-between"} flexDirection={"row"} py={5} px={10} gap={5}>
//           <Typography variant="h6" fontSize={18} fontWeight={"bold"}>Medical</Typography>
//           <FaBriefcaseMedical/>
//         </Stack>
//         <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5, fontSize: 16, fontWeight: "bold"}} >200</Typography>
//       </Stack>
//       <Stack bgcolor={"orange"} borderRadius={5}>
//         <Stack display={"flex"} justifyContent={"space-between"} flexDirection={"row"} py={5} px={10} gap={5}>
//           <Typography variant="h6" fontSize={18} fontWeight={"bold"}>Food</Typography>
//           <IoFastFoodSharp size={20}/>
//         </Stack>
//         <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5, fontSize: 16, fontWeight: "bold"}} >300</Typography>
//       </Stack>
//       <Stack bgcolor={"#03fc7b"} borderRadius={5}>
//         <Stack display={"flex"} justifyContent={"space-between"} flexDirection={"row"}py={5} px={10} gap={5}>
//           <Typography variant="h6" fontSize={18} fontWeight={"bold"}>Money</Typography>
//           <MdAttachMoney size={25} marginTop={10}/>
//         </Stack>
//         <Typography sx={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5, fontSize: 16, fontWeight: "bold"}} >500</Typography>
//       </Stack>

//     </Stack>

//       <SideBar />
//     </>
//   );
// };

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SideBar from "../../components/common/SideBar";
import { Stack, Typography } from "@mui/material";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

export const HomePage = () => {

  const dataBarChart = [
    { name: "Medical", value: 200 },
    { name: "Food", value: 300 },
    { name: "Money", value: 500 },
  ];

  const dataPieChart = [
    { name: "Medical", value: 200 },
    { name: "Food", value: 300 },
    { name: "Money", value: 500 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];


  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "15%",
          marginTop: "10%",
          flexDirection: "row",
        }}
      >
        <Stack bgcolor={"blue"} borderRadius={5}>
          {" "}
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            py={5}
            px={10}
            gap={5}
          >
            <Typography variant="h6" fontSize={18} fontWeight={"bold"}>
              Medical
            </Typography>
            <FaBriefcaseMedical />{" "}
          </Stack>{" "}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            200
          </Typography>{" "}
        </Stack>{" "}
        <Stack bgcolor={"orange"} borderRadius={5}>
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            py={5}
            px={10}
            gap={5}
          >
            <Typography variant="h6" fontSize={18} fontWeight={"bold"}>
              Food
            </Typography>
            <IoFastFoodSharp size={20} />
          </Stack>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            300
          </Typography>
        </Stack>
        <Stack bgcolor={"#03fc7b"} borderRadius={5}>
          <Stack
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            py={5}
            px={10}
            gap={5}
          >
            <Typography variant="h6" fontSize={18} fontWeight={"bold"}>
              Money
            </Typography>
            <MdAttachMoney size={25} marginTop={10} />
          </Stack>{" "}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            500
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "15%",
          marginTop: "10%",
          flexDirection: "row",
        }}
      >
        {/* Bar Chart */}
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <ResponsiveContainer width={400} height={300}>
            <BarChart data={dataBarChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Stack>
        {/* Pie Chart */}
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={dataPieChart}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {dataPieChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Stack>
      </Stack>

      <SideBar />
    </>
  );
};
