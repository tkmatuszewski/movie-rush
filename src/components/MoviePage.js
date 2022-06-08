import { Header } from "./Header"
import { Title } from "./Title"
import { Search } from "./Search"
import { Navigation } from "./Navigation"
import { Main } from "./Main"
import { Footer } from "./Footer"
// import { Movie } from "./Movie"

export const MoviePage = () => {


    return (
        <>
            <Header headerHeight="10vh">
              <Title/>
              <Search/>
              <Navigation/>
            </Header>
            <Main>
                {/* <Movie movieId={movieId}/> */}
            </Main>
            <Footer/>
        </>
    )
}