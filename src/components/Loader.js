import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    border: 10px solid gray;
    border-top: 16px solid black;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Loader = () => {
    return (
        <StyledLoader>
            <div />
        </StyledLoader>
    )
}