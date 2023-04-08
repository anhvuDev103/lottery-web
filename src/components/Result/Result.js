import React from "react";
import Body from "../Body";
import Footer from "../Footer";
import Header from "../Header";
import { StyledBoxWrapper } from "../Styles/Result.styled";

const Result = ({ state, isNewYear }) => {
  const { power, lottery, twoDigitalsNums } = state.data;
  const { timestamps } = state;

  return (
    <StyledBoxWrapper>
      <Header data={power} />
      <Body data={lottery} isNewYear={isNewYear} />
      <Footer data={{ twoDigitalsNums, timestamps }} />
    </StyledBoxWrapper>
  );
};

export default Result;
