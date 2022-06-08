import React from 'react'
import { Header } from './Header'
import { Title } from './Title'
import { Navigation } from './Navigation'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { home } from '../constants/routes'

const WatchlistStyled = styled.div`
    width: 90%;
    font-family: "Lato", sans-serif;
    margin: 0 auto;

    h1 {
        font-family: "Oswald", sans-serif;
    }

`

export const Watchlist =()=> {
    return (
      <div>
        <Header>
          <Link to={home}>
            <Title />
          </Link>
          <Navigation width={"20%"} />
        </Header>
        <WatchlistStyled>
          <h1>Watchlist</h1>
          <ul></ul>
        </WatchlistStyled>
      </div>
    );
}
