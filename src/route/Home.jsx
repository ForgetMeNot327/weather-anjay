import React, { useContext, useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";

import Main from "../components/main/Main";
import Authcontext from "../components/store/Authcontext";

const Home = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalGradient, setGeneralGradient] = useState(null);
  const [time, setTime] = useState(0);
  // const { generalGradient: gradient } = useContext(Authcontext);

  useEffect(() => {
    if (generalGradient) {
      console.log(generalGradient);
    }
  }, [generalGradient]);

  return (
    <Authcontext.Provider
      value={{ generalGradient, setGeneralGradient, time, setTime }}
    >
      <VStack
        bgGradient={`${generalGradient && generalGradient}`}
        minH="100vh"
        pb={{ base: "6", sm: "0" }}
        overflowX={{ base: "hidden" }}
      >
        <Main setIsSuccess={setIsSuccess} />
      </VStack>
    </Authcontext.Provider>
  );
};

export default Home;
