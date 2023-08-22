import React from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

//* Components
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} bg={"gray.50"}>
      <GridItem
        as={"aside"}
        colSpan={1}
        bg={"purple.400"}
        minH={"100vh"}
        p={"30px"}
      >
        <span>sidebar</span>
      </GridItem>
      <GridItem
        as={"main"}
        colSpan={5}
        p={"40px"}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </GridItem>
    </Grid>
  );
};

export default App;
