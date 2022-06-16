import { useState } from "react";
import { GlobalStyle} from "./GlobalStyle";
import { HeroPage } from "./HeroPage";
import {MovieContext} from "../contexts/MovieContext"
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { home, pageNotFound } from "../constants/routes";
import {Movie} from "./Movie";
import {PageNotFound} from "./PageNotFound";
import { MovieList } from "./MovieList";
import { Header } from "./Header";
import { Title } from "./Title";
import { Search } from "./Search";
import { Footer } from "./Footer";
import { FilterProvider } from "../contexts/FilterContext";
import { MovieProvider } from "../contexts/MovieContext";

function App() {

  const [value, setValue] = useState([]);
	function updateValue(inputValue) {
		setValue(inputValue);
  }

  return (
    <BrowserRouter>
      <MovieProvider>
        <div className="App">
          <GlobalStyle />
          <Header headerHeight={"15vh"}>
            <Link to={home}>
              <Title />
            </Link>
            <Search />
          </Header>
          <FilterProvider>
            <Routes>
              <Route path={home} element={<HeroPage />} />
              <Route path="movies" element={<MovieList />} />
              <Route path="/movies/:movieId" element={<Movie />} />
              <Route path={pageNotFound} element={<PageNotFound />} />
              <Route path="*" element={<Navigate to={pageNotFound} />} />
            </Routes>
          </FilterProvider>
          <Footer />
        </div>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
