import {createContext, useState} from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

    const [movieList, setMovieList] = useState([]);

    return (
        <MovieContext.Provider value={{ movieList, setMovieList }}>
            {children}
        </MovieContext.Provider>
    )
}