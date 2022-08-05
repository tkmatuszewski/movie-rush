import React, {useState, useContext} from 'react';
import { MovieContext } from '../contexts/MovieContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Filters from './Filters';

const Cnt = styled.div`
display: flex ;
width: 95%;
margin: 0 auto;
margin-top: 50px;

h1 {
  font-family: "Oswald", sans-serif;
}
`

const MovieListStyled = styled.div`
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5rem;
  row-gap: 2rem;
  margin-bottom: 5%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 2rem ;
    width: 75%;
    margin: 0 auto ;
  }

    a {
      width: 100%;
      display: block;
      color: black;
      text-decoration: none;
    }
  

  .movieItem {
    cursor: pointer;
    font-family: "Lato", sans-serif;
  }

  img {
    width: 100%;
    object-fit: cover;
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
    display: flex;
    font-family: "Lato", sans-serif;
    color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
  }
`;

export const MovieList = ()=> {

  const { movieList } = useContext(MovieContext);
  const [showFilters, setShowFilters]= useState(false)

    const renderMovies = ()=> {
      return movieList.map(({ title, id, poster_path }) => {
        return (
          <Link to={`/movies/${id}`} className="movieItem" key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movie poster" />
            <div className="movieData">
              <strong className="movieData__title">{title}</strong>
            </div>
          </Link>
        )
      }
      );
    }

    const noResults =()=> {
      return (
        <div className="noResults">
          <h2>No results found</h2>
        </div>
      );
    }
    
    const condition = (value)=> {
              if (value ==="null" || value === undefined){
                return noResults();
              } else {
              return renderMovies(value)
            }
    }

  return (
    <>
      <Cnt>
        {/* {showFilters && <Filters />} */}
        <div>
          <h1>Search results</h1>
          {/* <button className="filters" onClick={()=>setShowFilters(!showFilters)}>Filters</button> */}
          <MovieListStyled>{condition(movieList)}</MovieListStyled>
        </div>
      </Cnt>
    </>
  );
}