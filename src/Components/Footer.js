import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 15vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer__copyright {
  color: white;
  opacity: 0.5;
  font-family: "Lato", sans-serif;
  }
`

export const Footer =()=> {
  return (
    <StyledFooter>
        <div className="footer__copyright">
            &copy; tkmatuszewski 2021
        </div>
    </StyledFooter>
  )
}