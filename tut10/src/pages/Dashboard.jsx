import React, { useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar
} from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const tasksLoader = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    tasksLoader();
  }, []);

  return (
    <SimpleGrid columns={4} spacing={"10px"} minChildWidth={"300px"}>
      {tasks &&
        tasks.map((item, idx) => {
          return (
            <Card
              key={idx}
              borderTop={"8px"}
              borderColor={"purple.400"}
              background={"white"}
            >
              <CardHeader>
                <Flex gap={5}>
                  <Box w={"50px"} h={"50px"}>
                    <Avatar src={item.img} />
                  </Box>
                  <Box>
                    <Heading as={"h3"} size={"sm"}>
                      {item.title}
                    </Heading>
                    <Text>by {item.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color={"gray.500"}>
                <Text>{item.description}</Text>
              </CardBody>

              <Divider borderColor={"gray.200"} />

              <CardFooter>
                <HStack>
                  <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant={"ghost"} leftIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          );
        })}
    </SimpleGrid>
  );
};

export default Dashboard;
