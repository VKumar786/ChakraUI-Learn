import React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"} gap={"10px"}>
      <Heading as="h1">Dojo Task</Heading>

      <Spacer />

      <Avatar src="/img/mario.png" name="mario" bg={"purple"} color={"white"} >
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize={"xs"} color={"white"}>4</Text>
          </AvatarBadge>
      </Avatar>
      <Text>yadav11adu@gmail.com</Text>
      <Button colorScheme="purple" onClick={showToast}>
        Logout
      </Button>
    </Flex>
  );
};

export default Navbar;
