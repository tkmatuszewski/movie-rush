import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewsStyled = styled.div`
  grid-column: 1/3;
  grid-row: 5/6;

  h4 {
    padding-bottom: 3rem;
  }

  .review {
    display: flex;
    justify-content: space-between;
    line-height: 1.2;
    font-size: 1.5rem;
    margin-bottom: 5vh;
    border-bottom: 1px solid #d7d3d3;
  }

  .review:last-of-type {
    border: none;
  }

  .user {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 1rem;
    }
  }

  p {
    width: 75%;
    margin-top: 0;
  }

  .no__review {
    font-size: clamp(1.2rem,2vw ,2rem);
  }
`;

export const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);
    const [revError, setRevError] = useState();
    const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    const axiosData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
            setReviews(data.results);
            setLoading(false);
      } catch (error) {
        setRevError(error.message);
      }
    };
    axiosData();
  }, [movieId]);

  return (
    <>
      <ReviewsStyled className="box">
              <h4>Reviews</h4>
              {loading && <div>Loading</div>}
              {revError && <div >{revError}</div>}
                  {
                      reviews.length > 0 ? (
                          reviews.map((rev, index) => {
                              return (
                                  <div className="review" key={index}>
                                      <div className="user">
                                          <img
                                              src={`https://image.tmdb.org/t/p/original${rev.author_details.avatar_path}`}
                                              alt="Avatar"
                                              width="150px"
                                              heigh="150px"
                                          />
                                          <strong>{rev.author}</strong>
                                      </div>
                                      <p>{rev.content}</p>
                                  </div>
                              );
                          })
                      ) : (
                          <span className="review no__review">Sorry, no reviews yet!</span>
                      )
                  }
      </ReviewsStyled>
    </>
  );
};
