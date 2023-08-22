import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <SimpleGrid p={"10px"} columns={4} spacing={"10px"} minChildWidth={"250px"}>
      <Box bg="white" height={"200px"} border={"1px solid"}>
        <Text
          fontSize={{ base: "15px", md: "20px", lg: "35px" }}
          color={{ base: "greenyellow", md: "blue", lg: "green" }}
        >
          Hello
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
}

export default Dashboard;
