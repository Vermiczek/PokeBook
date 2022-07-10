import styled from "styled-components";

export const StyledPokemonThumbnail = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  text-align: center;
  color: white;
  font-smooth: never;
  -webkit-font-smoothing: none;
  -webkit-box-shadow: 0 12px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 12px 6px -6px #0000007a;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  size: 10px;
  cursor: pointer;
  .types-wrapper {
    display: flex;
    flex-direction: row;
  }
`;
