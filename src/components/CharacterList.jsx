import React from "react";
import { useState, useEffect } from "react";
import Character from "./Character";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getFecthData() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFecthData();
  }, []);

  return (
    <>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </>
  );
}
