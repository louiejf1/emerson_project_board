import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Board from "./Board";
import Header from "../components/Header/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Nanum Gothic", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board />
        </AppWrapper>
      </>
    );
  }
}

export default App;
