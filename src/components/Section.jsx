import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
import Slide from 'react-reveal/Slide';
function Section({ pOne, hOne, hTwo, hThree, pFour }) {
  return (
    <Container>
      <Fade left>
      <Left>
        <p>{pOne}</p>
        <h1> {hOne} </h1>
        <h4> {hTwo} </h4>
      </Left>
      </Fade>
      <Slide left>
      <Right>
        <h1> {hThree} </h1>
        <p> {pFour} </p>
        {!pFour && (
          <img
            src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
            alt="random person"
          />
        )}
      </Right>
      </Slide>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  border-bottom: 2px solid #00ffbb11;
`;
const Left = styled.div`
  h1 {
    border-bottom: 2px solid #00ffbb;
  }
`;
const Right = styled.div`
  width: 400px;
  text-align: center;
  margin: 0 10px;
  * {
    margin: 30px 0;
  }
  h1 {
    text-align: center;
    color: #00ffbb;
    font-size: 3rem;
  }
  img {
    width: 400px;
    text-align: center;
    box-shadow: 1px 1px 5px 5px #00ffbb09;
  }
`;
