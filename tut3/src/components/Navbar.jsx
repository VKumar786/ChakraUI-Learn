import React from "react";
import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as={"nav"} p={"10px"} alignItems={"center"} gap={"10px"}>
      <Heading as="h1">Dojo Task</Heading>

      <Spacer/>

      

      <Box bg="gray.200" p="10px">
        M
      </Box>
      <Text>yadav11adu@gmail.com</Text>
      <Button colorScheme="purple">Logout</Button>
    </Flex>
    // <HStack spacing={"20px"}> </HStack>
    // <Flex bg={"gray.200"} justifyContent={"space-around"} wrap={"wrap"} gap={"2"}>
    //   <Box w={"150px"} h={"50px"} bg={"red"}>1</Box>
    //   <Box w={"150px"} h={"50px"} bg={"purple"}>2</Box>
    //   <Box w={"150px"} h={"50px"} bg={"blue"} flexGrow={"1"}>3</Box>
    //   <Box w={"150px"} h={"50px"} bg={"green"} flexGrow={"2"}>4</Box>
    // </Flex>
  );
};

export default Navbar;
