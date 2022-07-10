import styled from "styled-components";

export const StyledStatMeter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  .window {
    text-align: center;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    width: 4rem;
    height: 1.5rem;
    border-radius: 20px;
  }

  cursor: context-menu;
  .max {
    z-index: 0;
    width: 250px;
    height: 20px;
    border-radius: 20px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    text-align: center;
  }

  .text {
    width: 250px;
    z-index: 2;
    transform: translateY(-20%);
    position: absolute;
    text-align: center;
  }
  .statvalue {
    z-index: 1;
    position: relative;
    border-radius: 20px;
    height: 18px;
  }
`;
