import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <SimpleGrid p={"10px"} columns={4} spacing={"10px"} minChildWidth={"250px"}>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>

      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>

      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
      <Box bg="white" height={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
  );
};

export default Dashboard;
