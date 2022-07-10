import styled from "styled-components";

export const StyledPokemonIndex = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-align: center;
  color: white;
  font-smooth: never;
  -webkit-font-smoothing: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  size: 10px;
  width: 100%;
  height: 100%;

  .wrapper-all {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 30px;
    @media (max-height: 700px) {
      width: 80%;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      width: 20px;
      margin: 50px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 20px;
      height: 10px;
      background-color: #5d6ab8;
      margin: 15px;
      border-radius: 30px;
    }
  }

  .pokeEvos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .infowrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    z-index: 9999;

    background-color: #ea4c89;
    border-radius: 0px;
    display: flex;
    align-items: center;
    border-style: none;
    text-align: center;
    justify-content: center;
    color: white;
    font-smooth: never;
    -webkit-font-smoothing: none;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    size: 10px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;

    font-size: 14px;

    height: 40px;
    line-height: 20px;

    list-style: none;
    width: 100px;
    outline: none;

    text-align: center;
    text-decoration: none;
    transition: background-color, scale 600ms ease-in;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
  }
  cursor: context-menu;

  .desc {
    width: 250px;
  }
  button:hover,
  button:focus {
    background-color: #f082ac;
  }
  .back {
    width: 80%;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    align-items: center;
    height: 70px;
    text-align: center;
    transition: background-color 300ms ease-in;
    background-color: #3b0057;
  }
  .typeInfo {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
  .sprite {
    background-repeat: "no-repeat";
    background-position: "center";

    :hover {
      background-color: blue;
    }
  }
`;
