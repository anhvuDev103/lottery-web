import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  > div {
    width: 40px;
    height: 40px;
    border: 3px solid black;
    border-radius: 999px;
    border-bottom-color: transparent;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: ${rotate} 2s linear infinite;
  }
`;

export const PaperWrapper = styled.div`
  width: 28.7cm;
  height: 19cm;
  padding: 1.2cm 0.9cm 0.7cm 0.7cm;
  display: grid;
  grid-template-columns: 13.35cm 13.35cm;
  grid-template-rows: 19cm;
  column-gap: 1.7cm;
  transform: translateX(-0.2cm);
`;

export const StyledBoxWrapper = styled.div`
  width: 13.35cm;
  height: 19cm;
  padding: 2px;
  border: 5px double black;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 2px dashed black;

  .top {
    font-size: 15px;
    text-align: center;
  }

  .bottom {
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    font-size: 22px;
    display: flex;
    justify-content: space-between;

    .dienToan,
    .thanTai {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }

    .title {
      transform: translateY(4px);
    }

    .data {
      margin-left: 5px;
      font-size: 30px;
    }
  }
`;

export const StyledBody = styled.div`
  width: 100%;
  height: 60%;
  font-family: 'Great Vibes', cursive;
  font-weight: bold;

  .top {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
  }

  .top .special {
    font-size: 50px;
    margin-left: 15px;

    .title {
      font-size: 40px;
    }

    .data {
      margin-left: 18px;
      font-size: 70px;
    }
  }

  .body {
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 22% 22% 6% 22% 6% 22%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  }

  .body > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body > div.title {
    font-size: 25px;
    justify-content: left;
    margin-left: 15px;
  }

  .body > div.data {
    justify-content: right;
    margin-right: 5px;
  }

  .space {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    transform: translateY(-3px);
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 30%;

  .body {
    width: 100%;
    height: 175px;

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      min-height: 189px;
    }
  }

  ul {
    list-style-type: none;
    font-size: 20px;
  }

  th.title {
    width: auto;
  }

  .first-cols {
    vertical-align: top;
    font-size: 20px;
  }

  th.cols {
    vertical-align: top;
    height: 137.07px;
    min-width: 40px;
  }

  .title-table {
    width: 12%;
    font-family: 'Great Vibes', cursive;
    transform: translateY(2px);
  }

  .bottom {
    width: 100%;
    height: 25%;
    font-family: 'Andada Pro', serif;
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    transform: translateY(15px);
    text-transform: uppercase;
    font-style: italic;
  }

  .data {
    font-family: unset;
  }
`;
