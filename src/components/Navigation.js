import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { home, watchlist } from '../constants/routes';

const StyledNavigation = styled.nav`
width: ${props=> props.width};
display: flex;
justify-content: space-evenly;
color: gray;
font-family: "Lato", sans-serif;

a {
    text-decoration: none;
    color: gray;
    font-family: "Lato", sans-serif;
    transition: 0.5s;
    margin: 0.5rem;
}

a:hover {
    color: white
}
`

export const Navigation =({width})=> {
    return (
        <StyledNavigation width={width}>
            <Link to={home}>Home</Link>
            <Link to={watchlist}>Watchlist</Link>
        </StyledNavigation>
    )
}
