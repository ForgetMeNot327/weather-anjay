import React from "react";
import { formatToLocalTime } from "../../api";
import {
  Text,
  SimpleGrid,
  HStack,
  Badge,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  UilWind,
  UilTemperatureHalf,
  UilTemperatureQuarter,
  UilTear,
} from "@iconscout/react-unicons";

function DetailLayer({
  forecast: { daily, hourly },
  current: { feels_like, humidity, speed, dt, timezone },
}) {
  return (
    <SimpleGrid
      spacingY={{ base: "3", sm: "3" }}
      mt={{ base: "0", sm: "25px", md: "150px" }}
      mx={{ sm: "auto", md: "0" }}
      w={{ sm: "75%", md: "70%", lg: "75%" }}
    >
      <Badge
        variant="glass"
        w={{ base: "275px", sm: "100%" }}
        justifyContent="space-between"
        flexDirection="row"
        color="white"
      >
        <Flex alignItems="center">
          <UilTemperatureHalf size="20" />
          <Text>{feels_like.toFixed()}&#176;</Text>
        </Flex>
        <Flex alignItems="center">
          <UilTear size="20" />
          <Text>{humidity}%</Text>
        </Flex>
        <Flex alignItems="center">
          <UilWind />
          <Text>{speed} km/h</Text>
        </Flex>
      </Badge>
      <Badge
        variant="glass"
        w={{ base: "275px", sm: "100%" }}
        flexDirection="column"
      >
        <Flex justify="space-between">
          <Text fontWeight="700" fontSize="sm">
            Today
          </Text>
          <Text fontWeight="700" fontSize="sm">
            {formatToLocalTime(dt, timezone, "ccc, d LLL")}
          </Text>
        </Flex>
        <SimpleGrid columns="4" pt="3">
          {hourly.map((h) => (
            <VStack>
              <Text>{h.temp.toFixed()}&#176;</Text>
              <Image src={`img/${h.icon}.png`} alt="" boxSize="40px" />
              <Text fontSize="10px">{h.title}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Badge>
      {/* ------------------------------------------------ */}
      <Badge
        variant="glass"
        w={{ base: "275px", sm: "100%" }}
        flexDirection="column"
      >
        <Flex justify="space-between" alignItems="center">
          <Text fontWeight="700" fontSize="sm">
            Next Forecast
          </Text>
          <UilTemperatureQuarter />
        </Flex>
        {daily.map((d) => (
          <SimpleGrid maxH="200px">
            <Flex justify="space-between" alignItems="center">
              <Text>{d.title}</Text>
              <Image src={`img/${d.icon}.png`} alt="" boxSize="35px" />
              <Text>{d.temp.toFixed()}&#176;</Text>
            </Flex>
          </SimpleGrid>
        ))}
      </Badge>
    </SimpleGrid>
  );
}

export default DetailLayer;
