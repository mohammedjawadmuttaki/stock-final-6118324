import React from "react";
import {
  Heading,
  Flex,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="left"
      justify="space-between"
      wrap="wrap"
      padding={16}
      bg="yellow.400"
      color="black"
    >
      <Flex align="left" mr={15}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          SUPPLIERS MANAGEMENT
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;