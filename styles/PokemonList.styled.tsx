import styled from "styled-components";

export const StyledPokemonList = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  .infowrapper {
  }
  flex-direction: column;
  .thumbnail-map {
    background-color: #f0f8ffc0;
    border-radius: 20px;
    padding: 20px;
    @media (max-height: 700px) {
      height: 65vh;
    }
    @media (max-height: 600px) {
      height: 55vh;
    }
    @media (max-width: 10000px) {
      /* Replace with 360 or whatever you intend to */
      overflow-y: auto;
      max-height: 75vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 50px;
      overflow-x: hidden;
    }
    @media (max-width: 1500px) {
      /* Replace with 360 or whatever you intend to */
      overflow-y: auto;
      max-height: 75vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 50px;
      overflow-x: hidden;
    }
    @media (max-width: 1100px) {
      /* Replace with 360 or whatever you intend to */
      overflow-y: auto;
      max-height: 75vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 50px;
      overflow-x: hidden;
    }
    @media (max-width: 800px) {
      /* Replace with 360 or whatever you intend to */
      overflow-y: auto;
      max-height: 75vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      overflow-x: hidden;
    }
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
