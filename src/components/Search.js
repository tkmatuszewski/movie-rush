import {React, useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import { MovieContext } from '../contexts/MovieContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

export const SearchStyled = styled.form`
    width: 35%;
    border-radius: 1.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr;
    font-family: "Lato", sans-serif;

     @media only screen and (max-width: 840px) {
       width: 60%;
    }

input {
    grid-row: 2/3;
    grid-column: 1/2;
    width: 100%;
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
    padding: 0 1rem;
    border: none;
}

.search__err {
    grid-row: 1/2;
    grid-column: 1/3;
    color: white;
}
`


export const Search = () => {

  const [searchParams] = useSearchParams();
  const q = searchParams.get("s");
  const [query, setQuery] = useState(q);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
  const { value, updateValue } = useContext(MovieContext);

  let navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleReset = () => {
    setQuery("");
  }

  const axiosData = async (movieName) => {
    setLoading(true);
    try {
      const {
        data: { Search },
      } = await axios.get(
        "http://www.omdbapi.com/?apikey=a7843424&s=" + movieName
      );
      setData(Search);
      updateValue(Search);
      setLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "" && query !== null) {
      axiosData(query)
      updateValue(data)
      navigate({
        pathname: `/movies?s=${query}`,
      })
      handleReset()
    }
    else {
      setIsError("Type a title to search for movies!")
    }
  }
  
    
  useEffect(() => {
    axiosData(q);
    const timer = setTimeout(() => {
      setIsError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <SearchStyled onSubmit={(e) => handleSubmit(e)}>
      <div className="search__err">{isError}</div>
      <input
        value={query}
        onChange={(e) => handleChange(e)}
        type="search"
        placeholder="search by title"
      />
      <button className="search__btn" type="submit">
        Find
      </button>
    </SearchStyled>
  );
}
