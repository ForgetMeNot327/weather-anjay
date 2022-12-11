import { Badge, Image, Heading, Text, HStack, VStack } from "@chakra-ui/react";

function MainLayer({ current: { icon, temp_max, temp_min, temp } }) {
  return (
    // <Badge variant="glass" w={{ base: "275px", sm: "fit-content" }}>
    //   </Badge>
    <VStack
      minW={{ base: "280px", sm: "75%", md: "280px" }}
      mt="50px"
      color="white"
      background={{ sm: "rgba(34, 25, 25, 0.20)" }}
      borderRadius={{ sm: "16px" }}
      boxShadow={{ sm: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
      backdropFilter={{ sm: "blur(10.1px)" }}
      p={{ sm: "8px 20px" }}
    >
      <VStack my="3">
        <Image src={`img/${icon}.png`} alt="" width="200px" />
        <Heading size="4xl" color="yellow.300">
          {temp.toFixed()}&#176;
        </Heading>
      </VStack>
      <VStack spacing="0" pb="20px">
        <Text size="md">Precipitations</Text>
        <HStack spacing="50px">
          <Text>Max: {temp_max.toFixed()}&#176;</Text>
          <Text>Min: {temp_min.toFixed()}&#176;</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default MainLayer;
