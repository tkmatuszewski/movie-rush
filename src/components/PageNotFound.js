import styled from "styled-components";
import React from "react";

const PageNotFoundStyled = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
font-family: sans-serif;

.pageNotFound__bg {
font-size: 16rem;
font-weight: bold;
color: rgba(0,0,0,0.3);

}
.pageNotFound__cnt {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 5rem;

    strong {
        display: block;
        font-size: 3rem;
        opacity: 0.8;
    }
}
`

export const PageNotFound = ()=> {
    return (
      <PageNotFoundStyled>
        <div className="pageNotFound__bg">
          404
          <div className="pageNotFound__cnt">
            <strong>Sorry!</strong>
            <strong>Page</strong>
            <strong>Not</strong>
            <strong>Found</strong>
          </div>
        </div>
      </PageNotFoundStyled>
    );
}