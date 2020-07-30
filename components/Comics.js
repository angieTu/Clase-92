import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState([]);

  const API_KEY = "d18d609c3a5a6880ea2a180434e7b377";

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}`)
      .then((response) => setComics(response.data.data.results));
  }, []);

  return (
    <>
      {comics.map((comic, index) => (
        <div key={index}>
          <h1>{comic.title}</h1>
        </div>
      ))}
    </>
  );
};

export default Comics;
