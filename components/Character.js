import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Character = () => {
  const history = useHistory();
  const { characterID } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${characterID}?apikey=d18d609c3a5a6880ea2a180434e7b377`
      )
      .then((response) => setCharacter(response.data));
  }, [characterID]);

  const handleClick = () => {
    history.goBack(-1);
  };

  return (
    <>
      <h1>{character.name}</h1>
      <button onClick={handleClick}></button>
    </>
  );
};

export default Character;
