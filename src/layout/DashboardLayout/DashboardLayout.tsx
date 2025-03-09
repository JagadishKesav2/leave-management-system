import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { DrawerHeader } from "@/components/Sidebar/Sidebar.styles.";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";

export const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { data, isPending, isSuccess } = useGetUserInfo();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        open={open}
        data={data}
        isPending={isPending}
        isSuccess={isSuccess}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar
        open={open}
        data={data}
        isPending={isPending}
        handleDrawerClose={handleDrawerClose}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
