import { useState, useRef, useEffect } from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  FormControl,
  background,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import Authcontext from "../store/Authcontext";
import { ProcessingGradient } from "../function/ProcessingGradient";

const Search = ({ onGetInput }) => {
  const [value, setValue] = useState("");
  const [gradient, setGradient] = useState("");
  let ref = useRef(null);
  const { generalGradient, time } = useContext(Authcontext);

  useEffect(() => {
    if (generalGradient) {
      setGradient(ProcessingGradient(generalGradient));
    }
  }, [generalGradient]);

  const submitHandler = (event) => {
    event.preventDefault();
    onGetInput(value);
    ref.current.value = "";
  };

  const changeHandler = (val) => {
    setValue(val);
  };

  return (
    <Stack
      position="absolute"
      right={{ base: `-10px`, lg: "10px", md: "-210px", sm: "100px" }}
      zIndex="99"
      top={{ sm: "20px", md: "5px", lg: "5px" }}
      // mt={{ sm: "50px", md: "0" }}
    >
      <FormControl as="form" onSubmit={submitHandler}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon color="white" />}
                variant="ghost"
                fontSize="2xl"
              />
            }
          />
          <Input
            type="text"
            placeholder="search for city..."
            _placeholder={{
              textTransform: "none",
              color: { base: "transparent", sm: "#a9a9a9" },
            }}
            w={{ base: "30px", sm: "fit-content" }}
            style={{ caretColor: "#fff" }}
            borderBottom={{ base: "none", sm: "white" }}
            transition=".3s ease-out"
            _focus={{
              _placeholder: { color: "#a9a9a9", transitionDelay: ".5s" },
              w: { base: "fit-content" },
              borderBottom: "white",
              // mr: { base: "10px", sm: "0" },
              px: { base: "30px", sm: "50px" },
              bgGradient: `linear(${gradient})`,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
            color="white"
            textTransform="capitalize"
            variant="flushed"
            onChange={({ target }) => {
              changeHandler(target.value);
            }}
            ref={ref}
          />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};

export default Search;
