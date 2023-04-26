import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

// Define the keyframes animation outside the component
function Orb() {
  const { width, height } = useWindowSize();

  const OrbStyled = styled.div`
    width: 1500px; /* Adjust the size as needed */
    height: 2000px; /* Adjust the size as needed */
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(270deg, #f96692 0%, #f2994a 870%);
    filter: blur(2000px); /* Adjust the blur as needed */
  `;

  return <OrbStyled>Orb</OrbStyled>;
}

export default Orb;
