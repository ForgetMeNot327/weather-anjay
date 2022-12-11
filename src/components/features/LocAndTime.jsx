import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import timezoneIcon from "../../assets/time-zone.png";

function LocAndTime({ current: { name, country }, forecast: { timezone } }) {
  return (
    <Box
      ml="-20px"
      mt={{ base: "0", sm: "50px" }}
      position={{ base: "static", sm: "relative" }}
      top={{ sm: "45px" }}
    >
      <Box display={{ base: "block", sm: "none" }}>
        <Menu>
          <MenuButton
            as={Button}
            bgColor="transparent"
            _expanded={{ bgColor: "transparent" }}
            _hover={{ bgColor: "transparent" }}
            color="white"
            rightIcon={<ChevronDownIcon />}
          >
            {name}, {country}
          </MenuButton>
          <MenuList cursor="text" px="5px">
            <MenuItem cursor="text">
              <Image
                src={timezoneIcon}
                boxSize="20px"
                filter="brightness(0) invert(1)"
              />
              <Text fontSize="sm" ml="5px">
                {timezone}
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Flex
        display={{ base: "none", sm: "flex" }}
        placeItems="center"
        direction="column"
        color="white"
      >
        <Heading>
          {name}, {country}
        </Heading>
        <Text>{timezone}</Text>
      </Flex>
    </Box>
  );
}

export default LocAndTime;
