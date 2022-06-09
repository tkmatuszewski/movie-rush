import React, {useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const MovieListStyled = styled.div`
  width: 85vw;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 5%;

  a {
    display: block;
    color: black;
    text-decoration: none;
  }

  .movieItem {
    margin-top: 50px;
    cursor: pointer;
    font-family: "Lato", sans-serif;
    width: 20%;
  }

  img {
    border-radius: 10px;
    object-fit: scale-down;
  }

  .movieRating {
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
  }

  .movieData {
    strong {
      display: block;
      font-weight: 500;
      opacity: 0.7;
    }

    .movieData__title {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0.25rem 0;
    }
  }

  .noResults {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lato", sans-serif;
    color: rgba(0,0,0,0.5)
  }
`;

export const MovieList = ()=> {

  const { value } = useContext(MovieContext);

    const renderMovies = (value)=> {
      return value.map(({ Title, Year, imdbID, Poster }) => (
        <Link to={`/movies/${imdbID}`} className="movieItem" key={imdbID}>
          <img src={Poster} alt="movie poster" />
          <div className="movieData">
            <strong className="movieData__title">{Title}</strong>
            <strong className="movieData__year">{Year}</strong>
          </div>
        </Link>
      ));
    }

    const noResults = ()=> {
      return (
        <div className="noResults">
          <h2>No results found</h2>
        </div>
      );
    }
    
    const condition = (value)=> {
              if (value ==="null" || value === undefined){
                return noResults();
              }else {
              return renderMovies(value)
            }
    }

  return (
    <MovieListStyled>
      {condition(value)}
    </MovieListStyled>
  );
}