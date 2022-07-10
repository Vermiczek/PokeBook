import styled from "styled-components";

export const StyledEvolutionChain = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    /* Replace with 360 or whatever you intend to */
    display: flex;
    flex-direction: column;
  }
  .tier {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      width: 20px;
      margin: 15px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 20px;
      background-color: #5d6ab8;
      margin: 15px;
      border-radius: 10px;
    }
  }
`;
