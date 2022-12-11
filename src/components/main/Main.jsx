import { useContext, useEffect, useState } from "react";
import Search from "../features/Search";
import {
  Box,
  VStack,
  Heading,
  Center,
  Spinner,
  Flex,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";

import {
  getLatLon,
  getForecastWeatherData,
  getCurrentWeatherData,
  formatCurrentWeather,
  formatForecastWeather,
  getCurrentLocation,
  formatToLocalTime,
} from "../../api";
import MainLayer from "./MainLayer";
import DetailLayer from "../detail/DetailLayer";
import Degrees from "../features/Degrees";
import LocAndTime from "../features/LocAndTime";
import Authcontext from "../store/Authcontext";

const Main = ({ setIsSuccess }) => {
  const [input, setInput] = useState("");
  const [latLon, setLatLon] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [degrees, setDegrees] = useState("metric");

  const { setGeneralGradient, setTime } = useContext(Authcontext);

  // get input
  const getInputHandler = (inputUser) => {
    setInput(inputUser);
  };

  // Get lat and lon from current location
  useEffect(() => {
    getCurrentLocation(setLatLon);
  }, []);

  // Get lat and lon from input city
  useEffect(() => {
    if (input.length > 0) {
      getLatLon(input).then((result) => {
        setLatLon(result);
      });
    }
  }, [input]);

  useEffect(() => {
    if (latLon.length > 0) {
      // get current weather data
      getCurrentWeatherData(latLon[0].lat, latLon[0].lon, degrees).then(
        (result) => {
          setCurrentWeather(formatCurrentWeather(result));
        }
      );
      // get forecast weather data
      getForecastWeatherData(latLon[0].lat, latLon[0].lon, degrees).then(
        (result) => {
          setForecastWeather(formatForecastWeather(result));
        }
      );
    }
  }, [latLon, degrees]);

  useEffect(() => {
    // get time
    if (currentWeather && forecastWeather) {
      let clock = formatToLocalTime(
        currentWeather.dt,
        currentWeather.timezone,
        "H"
      );
      // console.log(clock);
      setTime(parseInt(clock));
      if (parseInt(clock) > 18) {
        setGeneralGradient("linear(#08244F 0%, #134CB5 50%, #0B42AB 100%)");
      } else {
        setGeneralGradient("linear(#296BDD 0%, #33AADD 50%, #2DC8EA 100%)");
      }
      setIsSuccess(true);
    }
  }, [currentWeather, forecastWeather]);

  return (
    <VStack w={{ sm: "full" }}>
      <Heading
        display={{ base: "none", sm: "inline-block" }}
        position="absolute"
        top="35px"
        left="30px"
        color="white"
        letterSpacing="wide"
      >
        WEATHER APP
      </Heading>
      {currentWeather && forecastWeather ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          w={{ sm: "full" }}
        >
          <VStack mt={{ sm: "75px", md: "0" }}>
            <Flex
              position="relative"
              top="20px"
              w="full"
              align="center"
              direction={{ base: "row", sm: "column" }}
              mb={{ base: "0", sm: "80px" }}
            >
              <Search onGetInput={getInputHandler} />
              <LocAndTime current={currentWeather} forecast={forecastWeather} />
            </Flex>
            <Degrees setDegrees={setDegrees} />
            <MainLayer current={currentWeather} forecast={forecastWeather} />
          </VStack>
          <DetailLayer current={currentWeather} forecast={forecastWeather} />
        </Grid>
      ) : (
        <Center minH="350px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </VStack>
  );
};

export default Main;
