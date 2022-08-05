import styled from "styled-components"
import batman from "../assets/batman.jpg";

const HeroPageStyled = styled.div`
  display: block;
  background: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100vh 100vh;

  .hero {
    grid-row: 1/2;
    grid-column: 1/2;
    background-image: url(${batman});
    background-size: cover;
    background-position: center 25%;
    display: grid;
    grid-template-columns: 5% 40% 55%;
    grid-template-rows: 40% 40% 20%;

    @media only screen and (max-width: 840px) {
      grid-template-columns: 5% 90% 5%;
      grid-template-rows: 55% 45%;
      background-position: center -20%;

      .hero__text {
        width: 100%;
      }

      p {
        width: 66%;
      }
    }
  }

  .hero::before {
    content: "";
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(180, 35, 180, 0.2), black);
    position: absolute;
  }

  .hero__text {
    grid-row: 2/3;
    grid-column: 2/3;
    z-index: 2;
    color: white;
    font-family: "Lato", sans-serif;

    .hero__title {
      grid-row: 1/2;
      font-size: clamp(2rem, 6vw, 4rem);
      font-family: "Oswald", sans-serif;
    }
    p {
      grid-row: 2/3;
      width: 80%;
      font-size: 1.5rem;
      opacity: 0.7;
      margin: 0;
      line-height: 1.2;
      word-spacing: 0.3rem;
    }
  }

  .list__wrapper {
    margin: 2rem auto;
  }

  .about {
    min-height: 100vh;
    background: black;
    color: white;
    font-family: "Lato", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.25px solid gray;

    .about__cnt {
      width: 75%;
      display: flex;
      align-items: center;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
    .about__left,
    .about__right {
      width: 50%;
      display: flex;
      flex-direction: column;
    }

    .about__right {
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    span {
      display: block;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: bold;

      &:first-of-type {
        margin-left: 20%;
      }

      &:nth-of-type(2) {
        margin-left: 10%;
      }
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      width: 90%;
      color: gray;
      @media only screen and (max-width: 600px) {
        width: 100%;
        padding-top: 1.5rem;
      }
    }
  }

  .partners {
    height: 70vh;
    display: grid;
    grid-auto-rows: auto;
    font-size: clamp(2rem, 6vw, 4rem);
    font-family: "Oswald", sans-serif;
    color: gray;
    justify-content: center;
    @media only screen and (max-width: 600px) {
      width: 75%;
      margin: 0 auto;
    }

    .partners__cnt {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
    }

    .notice {
      font-size: 1rem;
      align-self: flex-end;
    }
  }
`;


export const HeroPage = ({children}) => {

  return (
    <HeroPageStyled>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">
            Your ultimate <br /> cinema guide
          </h1>
          <p>
            Browse through thousands of titles with detailed data just few
            clicks away.
          </p>
        </div>
        {children}
      </div>
      <div className="about">
        <div className="about__cnt">
          <div className="about__left">
            <span>Intuitive.</span>
            <span>Reliable.</span>
            <span>Fast.</span>
          </div>
          <div className="about__right">
            <p>
              No manuals needed for this app. Just type the title, hit the
              submit button and watch the magic happen. We source movie data
              from reliable partners. All the data you need just few clicks
              away!
            </p>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="partners__cnt">
          <strong>Powered by* </strong>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database Logo"
          />
        </div>
        <span className="notice">
          *This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </span>
      </div>
    </HeroPageStyled>
  );
}