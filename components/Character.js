import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
position: relative;
top: 119px;
}`;

const Card = styled.div`
  position: absolute;
  top: 83px;
`;

const Image = styled.img``;

const Character = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const history = useHistory();
  const { characterID } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${characterID}?apikey=${API_KEY}`
      )
      .then((response) => setCharacter(response.data.data.results[0]));
  }, [characterID]);

  const handleClick = () => {
    history.goBack(-1);
  };
  console.log(character);

  return (
    <Container>
      {character && (
        <Card>
          <h1>{character.name}</h1>
          <Image
          //src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <h2>Comics:</h2>
          {/* {character.comics.items.map((comic) => (
            <li>{comic.title}</li>
          ))} */}
        </Card>
      )}
      <button onClick={handleClick}>Back to Characters</button>
    </Container>
  );
};

export default Character;
