import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;

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
    font-family: "Great Vibes", cursive;
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
  font-family: "Great Vibes", cursive;
  font-weight: bold;

  .newYear {
    font-size: 26px;
    width: 100px;
    align-self: center;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 10px;
    left: 100%;
  }

  .top {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
  }

  .top .special {
    font-size: 50px;
    margin-left: 15px;
    display: flex;
    align-items: flex-end;
    position: relative;

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
    font-family: "Great Vibes", cursive;
    transform: translateY(2px);
  }

  .bottom {
    width: 100%;
    height: 25%;
    font-family: "Andada Pro", serif;
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

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 700;
  background-color: #4b78cd;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 16px;

  &:has(a) {
    margin-top: 16px !important;
    background-color: #1ed760;
    a {
      text-decoration: none;
      color: black;
    }
  }

  &[role="new-year"],
  &[role="print"],
  &#current,
  &:has(a) {
    grid-column: 1/3;
    margin-top: 0;
  }

  &[role="date"] {
    background-color: #ff9934;
    color: white;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const Actions = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;

  @media print {
    display: none;
  }
`;

export const NoItemFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Andada Pro", serif;
  font-weight: 800;
  font-size: 20px;
`;

export const Modal = styled.div`
  padding: 24px;
  border-radius: 24px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 312px;

  .heading {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 24px;
    font-family: "Andada Pro", serif;
  }

  input {
    width: 100%;
    border: 1px solid #0000001a;
    height: 50px;
    padding: 10px 16px;
    outline: none;
    border-radius: 8px;
    color: orange;
    font-size: 24px;
  }

  button {
    height: 40px;
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #c66556;
    margin-top: 16px;
  }
`;
