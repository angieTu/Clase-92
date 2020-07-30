import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Characters = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const [characters, setCharacters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`
      )
      .then((response) => setCharacters(response.data.data.results));
  }, []);
  console.log(characters);

  const handleClick = (id) => {
    history.push(`/characters/:${id}`);
  };

  return (
    <>
      {characters.map((character) => (
        <div key={character.id} onClick={() => handleClick(character.id)}>
          <h1>{character.name}</h1>
        </div>
      ))}
    </>
  );
};

export default Characters;
