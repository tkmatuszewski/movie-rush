import styled from "styled-components";

const HeaderStyled = styled.header`
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  
  .header__container {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    a {
      text-decoration: none;
      width: 25%;
    }
  }
`;

export const Header = ({children, headerHeight}) => {
  return (
    <HeaderStyled height={headerHeight}>
      <div className="header__container">
        {children}
      </div>
    </HeaderStyled>
  );
}