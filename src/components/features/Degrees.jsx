import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Degrees({ setDegrees }) {
  return (
    <Flex
      color="white"
      columnGap="5px"
      align="center"
      position={{ base: "relative", sm: "absolute" }}
      top="20px"
      right={{ sm: "50px", md: "80px", lg: "420px" }}
      _hover={{ cursor: "pointer" }}
    >
      <Text
        fontSize={{ sm: "2rem" }}
        _hover={{ transform: "scale(1.25)", color: "yellow.300" }}
        _active={{ color: "blue.300" }}
        onClick={() => {
          setDegrees("metric");
        }}
      >
        C
      </Text>
      <Center pb="2px" fontSize={{ sm: "2rem" }}>
        |
      </Center>
      <Text
        fontSize={{ sm: "2rem" }}
        _hover={{ transform: "scale(1.25)", color: "yellow.300" }}
        _active={{ color: "blue.300" }}
        onClick={() => {
          setDegrees("imperial");
        }}
      >
        F
      </Text>
    </Flex>
  );
}

export default Degrees;
