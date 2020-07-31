import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 83px;
`;

const Card = styled.div`
  width: 239px;
  height: 322px;

  & > h1 {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 68%;
  display: block;
  margin: 0 auto;
`;

const Comics = () => {
  const [comics, setComics] = useState([]);
  const history = useHistory();

  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}`)
      .then((response) => setComics(response.data.data.results));
  }, []);
  console.log(comics);

  const handleClick = (id) => {
    history.push(`/comics/${id}`);
  };
  return (
    <Container>
      {comics &&
        comics.map((comic) => (
          <Card key={comic.id} onClick={() => handleClick(comic.id)}>
            <h1>{comic.title}</h1>
            <Image
              alt={comic.title}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            ></Image>
          </Card>
        ))}
    </Container>
  );
};

export default Comics;
