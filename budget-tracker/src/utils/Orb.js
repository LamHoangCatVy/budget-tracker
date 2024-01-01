import React from "react";
import styled from "styled-components";

// Define the keyframes animation outside the component
function Orb() {

  return <OrbStyled></OrbStyled>;
}

const OrbStyled = styled.div`
  width: 100vw; /* Adjust the size as needed */
  height: 100vh; /* Adjust the size as needed */
  position: absolute;
  background: #ffe5ec;
  /* border-radius: 50%; */
  /* background: linear-gradient(270deg, #f96692 0%, #f2994a 870%); */
  /* filter: blur(3000px);  */
`;

export default Orb;
