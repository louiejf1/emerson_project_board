import React from "react";
import logo from "../../Images/EmrLogo.png";
import styled from "styled-components";

const Logoimg = styled.div`
  height: 75px;
`;

const Myimg = styled.img`
  height: 75px;
`;

export default function Image() {
  return (
    <Logoimg>
      <Myimg src={logo} />
    </Logoimg>
  );
}
