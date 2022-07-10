import styled from "styled-components";

export const StyledPokemonPicture = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
  justify-content: center;
  .pictures-wrapper {
    display: flex;
    flex-direction: row;
  }

  .pokemon-sprite {
    background-repeat: "no-repeat";
    background-position: "bottom";

    cursor: pointer;
    :hover {
      background-color: #9179fd58;
      border-radius: 30px;
    }
  }
`;
