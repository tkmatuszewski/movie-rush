import React from 'react'
import styled from "styled-components";

const FactsStyled = styled.div`
  grid-row: 4/5;
  grid-column: 1/2;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 768px) {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .movie__line {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .link {
    text-decoration: none;
    color: white;
  }
`;

export function Facts({ movie }) {
  return (
    <>
      <FactsStyled className='box'>
        <h4 className="movie__data__title">Facts</h4>
        <div className="movie__line">Release date: {movie.release_date}</div>
        <div className="movie__line">
          Production:
          {movie.production_countries.map((country, index) => {
            return (
              <span key={index}>
                {index ? ", " : " "}
                {country.name}
              </span>
            );
          })}
        </div>
        <div className="movie__line"> Budget: {movie.budget}$</div>
        <div className="movie__line"> Revenue: {movie.revenue}$</div>
        <div className="movie__line"> Poularity: {movie.popularity}</div>
        <div className="movie__line">
          <a className="link" href={movie.homepage}>Visit website</a>
        </div>
      </FactsStyled>
    </>
  );
}
