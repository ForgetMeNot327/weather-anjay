import { position } from "@chakra-ui/react";
import { DateTime } from "luxon";

const apiKey = process.env.REACT_APP_APIKEY;

export const getLatLon = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
};

// padahal q nya bisa langsung diisi sama city, tapi yah udh terlanjur

export const getForecastWeatherData = async (lat, lon, degrees) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${apiKey}&units=${degrees}`
  );
  const data = await response.json();
  return data;
};

export const getCurrentWeatherData = async (lat, lon, degrees) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${apiKey}&units=${degrees}`
  );
  const data = await response.json();
  return data;
};

export const formatCurrentWeather = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "ccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 5).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "cccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 5).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

export const getCurrentLocation = (setLatLon) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      setLatLon([{ lat: lat, lon: lon }]);
    });
  }
};
