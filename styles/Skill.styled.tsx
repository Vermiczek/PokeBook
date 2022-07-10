import styled from "styled-components";

export const StyledSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-style: solid;
  align-items: flex-start;
  justify-content: start;
  gap: 0px;
  border-width: 0px 0px 0px 0px;
  border-color: #433c63;
  color: white;
  size: 1px;
  font-smooth: never;
  font-size: 11px;
  -webkit-font-smoothing: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  .name {
    width: 100px;
    padding: 10px;

    background-color: #cc90d8;
  }
  .type {
    padding: 10px;
    width: 60px;
    background-color: #ffbeff;
  }
  .pp {
    padding: 10px;
    width: 30px;
    background-color: #d0bfff;
  }
  .power {
    width: 55px;
    padding: 10px;
    background-color: #f8a7a7;
  }
  .accuracy {
    width: 75px;
    padding: 10px;
    background-color: #90d8c6;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    margin: 0px;
  }
  .description {
    width: 320px;
    padding: 25px;
    text-align: center;
    transition: background-color 300ms ease-in;
    cursor: pointer;
    background-color: #b08af7;
    :hover {
      background-color: #d6c4f7;
    }
  }
  .desription-helper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #b08af7;
  }
  .showDescription {
    width: 320px;
    transition: background-color 300ms ease-in;
    padding: 10px;
    background-color: #b08af7;
    font-size: 10px;
    cursor: pointer;
    text-align: center;
    :hover {
      background-color: #d6c4f7;
    }
  }
`;

export const StyledSkillTemplate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 0px;
  text-align: center;
  color: white;
  font-size: 12px;
  font-smooth: never;
  margin: 0px;
  border-radius: 20px;
  z-index: -1;
  -webkit-font-smoothing: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  .name {
    border-radius: 20px 0 0 0;
    width: 100px;
    padding: 10px;
    background-color: #b482be;
  }
  .type {
    padding: 10px;
    width: 60px;
    background-color: #ca98ca;
  }
  .pp {
    padding: 10px;
    width: 30px;
    background-color: #a89ace;
  }
  .power {
    border-radius: 0px 20px 0 0;
    width: 55px;
    padding: 10px;
    background-color: #aa7272;
  }
  .accuracy {
    width: 75px;
    padding: 10px;
    background-color: #6ea195;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    margin: 0px;
  }
  .description {
    width: 470px;
    background-color: #280f55;
    padding: 300px;
  }
  .desription-helper {
    display: flex;
    flex-direction: column;
    padding: 500px;
  }
  .showDescription {
    width: 470px;
    padding: 10px;
    background-color: #b08af7;
    height: fit-content;
    font-size: 10px;
    text-align: center;
  }
  .desription-helper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
