import styled from "styled-components";

const myDivCSS = styled.div`
  border: 1px solid blue;
  display: flex;

  gap: 100px;
`;

const SiteNameCSS = styled.div`
  > * {
  }
`;

const DrawerItemCSS = styled.div`
  width: 150px;
  border: 2px solid green;
  /* background:  */
  /* margin: auto; */
  height: 20px;
  padding: 10px;
  float: ${(props) => props.floating};
  /* display: flex; */
`;

const DrawerItem = ({ label }) => {
  return <DrawerItemCSS>{label}</DrawerItemCSS>;
};
const myDiv = () => {
  return <myDivCSS>Hello</myDivCSS>;
};
const SiteName = ({ label }) => {
  return <SiteNameCSS>{label}</SiteNameCSS>;
};

function Toolbar() {
  return (
    <>
      <myDiv style={{ display: "flex", background: "blue", color: "#ffffff" }}>
        <SiteName label="Site Name"></SiteName>
        <DrawerItem floating="right" label="About us" />
        <DrawerItem floating="right" label="Prices" />
        <DrawerItem floating="right" label="Start Page" />
        <DrawerItem floating="right" label="Offer" />
        <DrawerItem floating="right" label="Contact" />
      </myDiv>
    </>
  );
}

export default Toolbar;
