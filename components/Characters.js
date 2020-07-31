import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 83px;
`;

const Card = styled.div`
  width: 239px;
  height: 302px;

  & > h1 {
    font-size: 24px;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 68%;
  display: block;
  margin: 0 auto;
`;

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
    history.push(`/characters/${id}`);
  };

  return (
    <Container>
      {characters.map((character) => (
        <Card key={character.id} onClick={() => handleClick(character.id)}>
          <h1>{character.name}</h1>
          <Image
            alt={character.name}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          ></Image>
        </Card>
      ))}
    </Container>
  );
};

export default Characters;
