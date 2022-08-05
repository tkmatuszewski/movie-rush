import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  .header__container {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2vh 0;

    a {
      text-decoration: none;
      @media only screen and (max-width: 665px) {
        display: none;
      }
    }
  }
`;

export const Header = ({children}) => {
  return (
    <HeaderStyled>
      <div className="header__container">
        {children}
      </div>
    </HeaderStyled>
  );
}