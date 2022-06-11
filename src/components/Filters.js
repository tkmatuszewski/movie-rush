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

const FilterStyled = styled.div`
  font-family: "Lato", sans-serif;

  strong {
    display: block;
    font-size: 1.2rem;
    padding: 0.75rem 0;
  }

  ul {
    list-style-type: none;
    width: 100%;
    padding: 0;
    display: ${(props) => props.flexStatus};
  }

  li {
    width: 100%;

    button {
      width: 100%;
      text-align: left;
      cursor: pointer;
      font-size: 1.2rem;
      background: transparent;
      border: none;
      transition: 0.5;

      &:hover {
        background: black;
        color: white;
      }
    }
  }

  input {
    margin-top: 1rem;
  }
`;

const Filter = ({ name, options, updateFunction, flexStatus, children }) => {
  
  const handleClick = (e, filterType) => {
    e.preventDefault();
    filterType(e.target.value);
  }

  return (
    <FilterStyled>
      <strong>{name}</strong>
      <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button value={option} key={option} onClick={e => handleClick(e, updateFunction)}>
              {option}
            </button>
          </li>
        )
      })}
      </ul>
      {children}
    </FilterStyled>
  )
}


export default function Filters() {

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLangauage] = useState("");

  

  const genres = ["comedy", "romance", "drama", "action", "thriller", "horror"];
  const years = [2022, 2021, 2020, 2019, 2018];
  const ratings = [9, 8, 7, 6, 5];
  const languages = ["english", "spanish", "french", "german"];

    return (
      <FiltersCnt>
        <FiltersStyled>
          <h3>Filters</h3>
          <Filter name="Genre" options={genres} updateFunction={setGenre}/>
          <Filter name="Year" options={years} updateFunction={setYear}>
            {/* <div>
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
            </div> */}
          </Filter>  
          <Filter name="rating" options={ratings} flexStatus="flex" updateFunction={setRating}/>
          <Filter name={"Language"} options={languages} updateFunction={setLangauage}/>
        </FiltersStyled>
      </FiltersCnt>
    );
}
