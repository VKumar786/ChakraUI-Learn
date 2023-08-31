import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <List color={"white"} fontSize={"1.2em"} spacing={4}>
        <ListItem>
          <Link to={"/"}>
            <ListIcon as={CalendarIcon} />
            Dashboard
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/create"}>
            <ListIcon as={EditIcon} />
            New Task
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/profile"}>
            <ListIcon as={AtSignIcon} />
            Profile
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Sidebar;
