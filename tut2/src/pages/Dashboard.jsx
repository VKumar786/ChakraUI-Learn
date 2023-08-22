import React from "react";
import { Heading, Text, Container, Box } from "@chakra-ui/react";

const Dashboard = () => {
  const boxStyles = {
    p: "10px",
    bg: "greenyellow",
    color: "white",
    filter: "blur(1px)",
    ':hover' : {
      filter: 'blur(0px)'
    }
  };
  return (
    <Container as={"section"} maxWidth="md">
      <Heading mb={"5"} textAlign={"center"} p={"10px"}>
        My name is khan
      </Heading>
      <Text color={"blue.800"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum beatae
        enim necessitatibus possimus rem, hic culpa soluta commodi explicabo
        aut, ab ipsam accusamus repudiandae molestiae dignissimos asperiores est
        tempore alias?
      </Text>
      <Text color={"greenyellow"} fontWeight={"bold"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
        ut soluta deleniti rem ducimus recusandae eos cumque laborum itaque
        architecto natus voluptas tenetur ratione, ipsum, doloremque tempora
        error vitae.
      </Text>

      <Box my={"2"} p={"1"} background={"orange"}>
        <Text color={"white"}>This is a box</Text>
      </Box>

      <Box sx={boxStyles}>Hello Vishal</Box>
    </Container>
  );
};

export default Dashboard;
