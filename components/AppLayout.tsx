import React from "react";
import Header from "@/componets/Header";
import { Box } from "@mui/material";

interface IProps {
  children: React.ReactElement | string;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Box component='main' sx={{ padding: "5px 15px" }}>{children}</Box>
    </>
  );
};

export default AppLayout;
