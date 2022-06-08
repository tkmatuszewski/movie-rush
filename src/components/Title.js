import styled from "styled-components";

const TitleStyled = styled.div`
  width: 100%;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: white;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  line-height: 2rem;
`;

export const Title = ()=> {
    return (
        <TitleStyled>
            <span>M</span>
            <span>o</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>r</span>
            <span>u</span>
            <span>s</span>
            <span>h</span>
        </TitleStyled>
    )
}

