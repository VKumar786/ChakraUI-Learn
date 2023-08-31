import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

//* Components
import Create, { createAction } from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} bg={"gray.50"}>
      <GridItem
        as={"aside"}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg={"purple.400"}
        minH={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as={"main"} colSpan={{ base: 6, lg: 4, xl: 5 }} p={"40px"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} action={createAction} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </GridItem>
    </Grid>
  );
};

export default App;
