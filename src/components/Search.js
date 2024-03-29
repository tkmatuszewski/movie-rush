import {React, useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import { MovieContext } from '../contexts/MovieContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

export const SearchStyled = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;  
    grid-template-rows: 1fr 1fr;
    font-family: "Lato", sans-serif;

    @media only screen and (max-width: 660px) {
      grid-column: 1/2;
    }

input {
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: 1.2rem;
    color: white;
    background: transparent;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
}
.search__btn {
    font-family: 'Lato',sans-serif; 
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
}

.search__err {
    grid-row: 1/2;
    grid-column: 1/3;
    color: white;
}
`;


export const Search = () => {

  const [searchParams] = useSearchParams();
  const q = searchParams.get("s");
  const [query, setQuery] = useState(q ? q : "");
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const { setMovieList } = useContext(MovieContext);

  let navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const axiosData = async (movieName) => {
    try {
      const {
        data : {results}
      } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}`
      );
      setData(results);
      setMovieList(results);
    }
    catch (error) {
      setIsError(error.message);
    }
  };

  const handleReset = () => {
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "" && query !== null) {
      navigate({
        pathname: `/movies?s=${query}`,
      })
      axiosData(query);
      handleReset()
    }
    else {
      setIsError("Type a title to search for movies!")
    }
  }
  
  useEffect(() => {
    if(q){axiosData(q)}
   const timer = setTimeout(() => {
      setIsError("");
   }, 3000);
    return () => clearTimeout(timer);
  },[]);
    
  return (
    <SearchStyled onSubmit={(e) => handleSubmit(e)}>
      <div className="search__err">{isError}</div>
      <input
        value={query}
        onChange={(e) => handleChange(e)}
        type="search"
        placeholder="search for title"
      />
      <button className="search__btn" type="submit">
        Find
      </button>
    </SearchStyled>
  );
}
