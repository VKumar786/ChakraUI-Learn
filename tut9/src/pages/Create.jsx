import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const Create = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box maxW={"480px"}>
      <form method="post" action="/create">
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Name: </FormLabel>
          <Input name="title" type="text" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Task Description: </FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          />
        </FormControl>

        <FormControl display={"flex"} alignItems={"center"} mb={"40px"}>
          <Checkbox name="isPriority" size={"lg"} colorScheme="purple" />
          <FormLabel mb={"0"} ml={"10px"}>
            Make this a priority tasks.
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};