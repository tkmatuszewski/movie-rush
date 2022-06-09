import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

const MovieStyled = styled.div`
  font-family: "Lato", sans-serif;
  margin-bottom: 5%;

  .movie__cnt {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(auto, 4);
    grid-row-gap: 3%;
    grid-template-columns: 1fr 1fr;
  }

  .movie__wrapper {
    padding: 8%;
  }

  .movie__head {
    grid-column: 1/3;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    color: black;
    border-bottom: 0.25px solid gray;
  }

  .movie__title {
    grid-column: 1/2;
    grid-row: 1/4;
    font-size: 3rem;
  }

  .movie__genre {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: flex-end;
    align-self: flex-end;
    opacity: 0.6;
  }

  .movie__year {
    grid-column: 2/3;
    grid-row: 2/3;
    opacity: 0.6;
    justify-self: flex-end;
    align-self: center;
  }

  .movie__runtime {
    grid-column: 2/3;
    grid-row: 3/4;
    justify-self: flex-end;
  }

  .movie__r {
    grid-column: 3/4;
    grid-row: 1/4;
    font-size: 2.5rem;
    opacity: 0.3;
    align-self: center;
    justify-self: center;
  }

  .movie__data {
    grid-row: 3/4;
    grid-column: 1/2;
    /* min-height: 60vh; */
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  .movie__data__title {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .movie__line {
    line-height: 1.5;
    opacity: 0.9;
  }

  .movie__img {
    grid-row: 2/4;
    grid-column: 2/3;
    align-self: center;
    justify-self: center;
    /* transform: translate(-10%, 10%); */
  }

  .movie__plot {
    grid-row: 2/3;
    grid-column: 1/2;
    text-indent: 10%;
    line-height: 1.2;
    align-self: center;
  }

  .movie__ratings {
    width: 100%;
    grid-row: 4/5;
    grid-column: 1/3;
    justify-self: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5%;

    span {
      width: 50%;
      line-height: 1.5;
    }
  }
  .movie__ratings__title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    display: block;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
  }

  .movie__ratings__line {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    opacity: 0.5;
    font-size: 1.2rem;
  }

  .movie__imdb {
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 3rem;
      color: gray;
    }
  }
`;

export const Movie = () => {
  let { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?i=${movieId}&apikey=a7843424&plot=full`
        );
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    return axiosData();
  }, [movieId]);

  return (
      <MovieStyled>
        {movie ? (
          <div className="movie__cnt">
            <div className="movie__head">
              <h1 className="movie__title">{movie.Title}</h1>
              <strong className="movie__genre">{movie.Genre}</strong>
              <strong className="movie__year">{movie.Year}</strong>
              <span className="movie__runtime">{movie.Runtime}</span>
              <span className="movie__r">{movie.imdbRating}</span>
            </div>
            <div className="movie__plot movie__wrapper">{movie.Plot}</div>
            <img className="movie__img" src={movie.Poster} />
            <div className="movie__data movie__wrapper">
              <h4 className="movie__data__title">Facts</h4>
              <div className="movie__line">Director: {movie.Director}</div>
              <div className="movie__line"> Cast: {movie.Actors}</div>
              <div className="movie__line"> Writer: {movie.Writer}</div>
              <div className="movie__line">Release date: {movie.Released}</div>
              <div className="movie__line"> Production: {movie.Country}</div>
              <div className="movie__line"> Box Office: {movie.BoxOffice}</div>
              <div className="movie__line"> Awards: {movie.Awards}</div>
              <div className="movie__line"> Metascore: {movie.Metascore}</div>
            </div>
            <div className="movie__ratings">
              <h4 className="movie__ratings__title">Ratings</h4>
              {movie.Ratings.map(({ Source, Value }) => {
                return (
                  <div className="movie__ratings__line" key={Source}>
                    <span>{Source}</span>
                    <span>{Value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Loader/>
        )}
      </MovieStyled>
  );
};
