import { useState, useEffect } from "react";
//mport "./App.css";
import CharacterList from "./components/CharacterList";
import { Text, Box, Image } from "@chakra-ui/react";
import logo from "./assets/logoRick.png";

export default function App() {
  return (
    <div className="App">
      <Box display="flex" justifyContent="center">
        <Image src={logo} maxW="400px" maxH="200px" />
      </Box>
      <CharacterList />
    </div>
  );
}
