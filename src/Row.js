import React, { useState, useEffect } from "react";
import instance from "./api";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
