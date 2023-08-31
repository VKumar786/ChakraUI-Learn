import React from "react";
import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"} gap={"10px"}>
      <Heading as="h1">Dojo Task</Heading>

      <Spacer/>

      

      <Box bg="gray.200" p="10px">
        M
      </Box>
      <Text>yadav11adu@gmail.com</Text>
      <Button colorScheme="purple">Logout</Button>
    </Flex>
  );
};

export default Navbar;
