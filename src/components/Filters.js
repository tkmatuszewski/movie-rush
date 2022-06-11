import React, {useState} from 'react'
import styled from 'styled-components';

const FiltersCnt = styled.aside`
width: 20%;
`

const FiltersStyled = styled.form`
padding: 50px;

h3 {
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
}
`

const Filter = styled.div`
font-family: "Lato", sans-serif;
  
strong {
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  }

button {
  border: 1px solid black;
  background: none;
  padding: 0.5rem 0.25rem;
}

ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
}

li {
  width: 100%;
  line-height:1.5;

  button {
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-size: 1.2rem;
    background: transparent;
    border: none;
  }
}

input {
  margin-top: 1rem;
}
`;

export default function Filters() {

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLangauage] = useState("");

  const handleGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  }

  const handleYear = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  }

  const generes = ["comedy", "romance", "drama", "action", "thriller", "horror"];

    return (
      <FiltersCnt>
        <FiltersStyled>
          <h3>Filters</h3>
          <Filter>
            <strong>Genre</strong>
            <ul>
              {generes.map(genre => {
                return (
                <li>
                  <button
                    value={genre}
                    key={genre}
                    onClick={(e) => handleGenre(e)}
                  >
                    {genre.toUpperCase()}
                  </button>
                  </li>
                )
              })};
            </ul>
          </Filter>
          <Filter>
            <strong>Year</strong>
            <button value="2022" onClick={(e) => handleYear(e)}>
              2022
            </button>
            <button value="2021" onClick={(e) => handleYear(e)}>
              2021
            </button>
            <button value="2020" onClick={(e) => handleYear(e)}>
              2020
            </button>
            <button value="2019" onClick={(e) => handleYear(e)}>
              2019
            </button>
            <button value="2018" onClick={(e) => handleYear(e)}>
              2018
            </button>
            <div>
              <input
                value={year}
                onChange={(e) => handleYear(e)}
                placeholder="year min"
              />
              <input
                value={year}
                onChange={(e) => handleYear(e)}
                placeholder="year min"
              />
            </div>

            <strong>Rating</strong>
            <button value="9">9</button>
            <button value="8">8</button>
            <button value="7">7</button>
            <button value="6">6</button>
            <button value="5">5</button>
            <label className="filter__label">
              <input placeholder={"1990"} />
            </label>
          </Filter>
          <Filter>
            <strong>Language</strong>
            <ul>
              <li>
                <button value="English">English</button>
              </li>
              <li>
                <button value="Spanish">Spanish</button>
              </li>
              <li>
                <button value="German">German</button>
              </li>
              <li>
                <button value="French">French</button>
              </li>
            </ul>
          </Filter>
        </FiltersStyled>
      </FiltersCnt>
    );
}
