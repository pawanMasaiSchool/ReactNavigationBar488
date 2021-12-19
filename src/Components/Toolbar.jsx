import styled from "styled-components";

const NavbarCSS = styled.div`
  background: ${(props) => props.background};
  border: 1px solid red;
  width: 800px;
  height: 50px;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  > * {
  }
`;
const Navbar = ({ children, background }) => {
  return <NavbarCSS background={background}>{children}</NavbarCSS>;
};

const NavElementCSS = styled.div`
  cursor: pointer;
  color: #ffffff;
  position: relative;
  top: 3px;
  /* left: 5px; */
  /* right: 5px; */
  /* border: 1px solid green; */
  width: auto;
  height: 25px;
  padding: 8px;
  font-size: 20px;
  float: ${(props) => (props.float === "right" ? "right" : "left")};
  /* background: yellow; */
  :hover {
    color: black;
  }
`;
const NavElement = ({ children, floating }) => {
  return <NavElementCSS float={floating}>{children}</NavElementCSS>;
};

const SitenameCSS = styled.img`
  width: 120px;
  height: 35px;
  margin-right: 199px;
  position: relative;
  top: 8px;
`;

const Sitename = ({ src, alt }) => {
  return <SitenameCSS src={src} alt={alt}></SitenameCSS>;
};

function Toolbar() {
  return (
    <>
      <Navbar background="blue">
        <NavElement floating="right">Contact</NavElement>
        <NavElement floating="right">Offer</NavElement>
        <NavElement floating="right">Start page</NavElement>
        <NavElement floating="right">Prices</NavElement>
        <NavElement floating="right">About us</NavElement>
        <Sitename src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BCBYoCFM8olP4Uv3C6jQEnvxZfwdXRI9kg&usqp=CAU"></Sitename>
      </Navbar>
    </>
  );
}

export default Toolbar;
