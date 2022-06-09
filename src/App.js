import React from "react";
import styled from "styled-components";
import "./styles.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: grey;
`;
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // Use Title and Wrapper like any other React component – except they're styled!
  render() {
    return (
      <Wrapper>
        <Title>Hello World!</Title>
        <h1> {typeof Wrapper} </h1>
      </Wrapper>
    );
  }
}

export default App;
