// import { Stack, Button } from "@mui/material";
// import React from "react";

// export const customizeButton = ({children, color, onClick, variant}) => {
//     return(
//         <Stack>
//             <Button variant={variant} onClick={onClick} color={color} >{children}</Button>
//         </Stack>
//     )
// }


import React from "react";
import { Stack, Button } from "@mui/material";

export const CustomizeButton = ({ children, color, onClick, variant }) => {
  return (
    <Stack>
      <Button variant={variant} onClick={onClick} color={color}>
        {children}
      </Button>
    </Stack>
  );
};