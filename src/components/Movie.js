import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { Facts } from './Facts';
import { Reviews } from "./Reviews";
const Credits = lazy(() => import('./Credits'));

const MovieStyled = styled.div`
  margin-bottom: 5%;

  .movie {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr;
    margin-top: 5vh;
    @media only screen and (max-width: 768px) {
     margin-top: 0;
    }
    
    .box {
      padding: 5vw;
    }

    h4 {
      font-family: "Oswald", sans-serif;
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  .movie__wrapper {
    padding: 8%;
  }

  .movie__hero {
    grid-row: 1/2;
    grid-column: 1/3;
    display: grid;
    grid-template-rows: max-content;
    justify-self: center;
    color: white;
    margin-bottom: 5vh;
    @media only screen and (max-width: 768px) {
      margin-bottom: 0;
    }

    .movie__img {
      grid-row: 1/3;
      grid-column: 1/3;
      width: 80vw;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .movie__hero__data {
      grid-row: 1/3;
      grid-column: 1/3;
      padding: 1rem;
      background: linear-gradient(180deg, #00000040, #ffffff00);

      .movie__title {
        font-size: clamp(1.5rem, 2vh, 3rem);
        margin: 1rem 0;
      }

      .movie__genres,
      .movie__runtime {
        font-size: clamp(1rem, 2vh, 1.5rem);
        line-height: 2rem;
      }
    }
  }

  .movie__rating {
    grid-column: 2/3;
    grid-row: 1/4;
    justify-self: flex-end;
    align-self: flex-start;
    font-size: clamp(1.2rem, 2vh, 3rem);
    background: black;
    padding: 1.5rem;

    span {
      display: block;
    }

    .movie__count {
      grid-column: 2/3;
      grid-row: 2/3;
      font-size: 2.5rem;
      justify-self: flex-end;
      font-size: 3rem;
    }
  }

  .movie__data {
    grid-row: 3/4;
    grid-column: 1/2;
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }

  .movie__plot {
    grid-row: 4/5;
    grid-column: 2/3;
    line-height: 1.2;
    font-size: 1.5rem;
    border-bottom: 1px solid black;
     @media only screen and (max-width: 768px) {
       grid-row: 2/3;
       grid-column: 1/3;
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
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
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
      {error && <div>{error}</div>}
      {movie ? (
        <div className="movie">
          <div className="movie__hero">
            <img
              className="movie__img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="Movie poster"
              loading="lazy"
            />
            <div className="movie__hero__data">
              <h2 className="movie__title">
                {movie.title + " (" + movie.release_date.split("-")[0] + ")"}
              </h2>
              <div className="movie__genres">
                {movie.genres.map((el, index) => (
                  <span key={index}>
                    {index ? ", " : ""}
                    {el.name}
                  </span>
                ))}
              </div>
              <span className="movie__runtime">{movie.runtime}min</span>
            </div>
            <div className="movie__rating">
              <span>{movie.vote_average}</span>
              <span>({movie.vote_count}) </span>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Credits movieId={movie.id} />
          </Suspense>
          <Facts movie={movie} />
          <div className="movie__plot box">
            <h4>Plot</h4>
            <p>{movie.overview}</p>
          </div>
          <Reviews movieId={movie.id} />
        </div>
      ) : (
        <Loader />
      )}
    </MovieStyled>
  );
};
