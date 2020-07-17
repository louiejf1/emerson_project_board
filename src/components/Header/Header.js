import React from "react";
import styled from "styled-components";
import Image from "../Header/Image";

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(1, 71, 133);
  border-bottom: 2px solid rgb(209, 209, 209);
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <HeaderWrapper>
    <Image />
    <Title>Emerson Project Tracker</Title>
  </HeaderWrapper>
);

export default Header;
