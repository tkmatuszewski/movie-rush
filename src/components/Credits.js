import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const CreditsStyled = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  }

  .credits__crew {

  }

  .credits__actors {
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
    padding-bottom: 3rem;
  }
    img, .credits__noImage {
    height: 300px ;
    width: 200px;
    margin-bottom: 1rem;
  }

  strong {
    font-family: "Oswald", sans-serif;
    font-size: 1.5rem;
    margin-bottom : 1.5rem;
  }

  span {
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    color: gray;
  }

  .credits__noImage {
    font-size: 2rem ;
    display: flex ;
    align-items: center;
    justify-content: center;
  }
  }
`;

const Credits = ({ movieId }) => {

  const [creditsData, setCreditsData] = useState([]);
  const [creditsError, setCreditsError] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const axiosData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setCreditsData(data.cast);
        setLoading(false)
      } catch (error) {
        setCreditsError(error.message);
      }
    };
    axiosData()
  }, [movieId]);

    return (
      <CreditsStyled className="box">
        <h4>Credits</h4>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <div className="credits__actors">
              {creditsError !== "" && <div>{creditsError}</div>}
              {creditsData.map((crew, index) => {
                  return (
                    <div key={index}>
                      {crew.profile_path?  <img
                        src={`https://image.tmdb.org/t/p/original${crew.profile_path}`}
                        alt="Actor"
                        width="200px"
                      /> : <div className="credits__noImage">No image</div>}
                      <strong>{crew.name}</strong>
                      <span>{crew.character}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </CreditsStyled>
    );
}
    
export default Credits;