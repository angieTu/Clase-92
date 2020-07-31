import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
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

const Comic = () => {
  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  const [comic, setComic] = useState({});

  const history = useHistory();
  const { comicID } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${comicID}?apikey=${API_KEY}`
      )
      .then((response) => setComic(response.data.data.results[0]));
  }, [comicID]);

  const handleClick = () => {
    history.goBack(-1);
  };

  return (
    <Container>
      {comic && (
        <Card>
          <h1>{comic.title}</h1>
          <Image
            alt={comic.title}
            //src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          />
          <button onClick={handleClick}>Back to Comics</button>
        </Card>
      )}
    </Container>
  );
};

export default Comic;
