import React from 'react';
import Body from '../Body';
import Footer from '../Footer';
import Header from '../Header';
import { StyledBoxWrapper } from '../Styles/Result.styled';

const Result = ({ data, isNewYear }) => {
  const { power, lottery, twoDigitalsNums, date } = data;
  return (
    <StyledBoxWrapper>
      <Header data={power} />
      <Body data={lottery} isNewYear={isNewYear}/>
      <Footer data={{ twoDigitalsNums, date }} />
    </StyledBoxWrapper>
  );
};

export default Result;
