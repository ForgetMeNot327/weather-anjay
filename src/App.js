import { Routes, Route } from "react-router-dom";
import Home from "./route/Home";

const App = () => {
  const MyRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    );
  };

  return (
    <>
      {/* <HStack>
        <Link to="/">Home</Link>
        <Link to="list">List</Link>
        <Link to="about">About</Link>
      </HStack> */}
      <MyRouter />
    </>
  );
};

export default App;
