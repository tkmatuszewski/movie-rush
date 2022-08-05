import styled from "styled-components";

const TitleStyled = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
export const Title = () => {
  return (
    <>
      <TitleStyled>
        Movierush
      </TitleStyled>
    </>
  );
};
