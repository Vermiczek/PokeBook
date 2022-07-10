import styled from "styled-components";

export const StyledAbilities = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 350px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    width: 20px;
    margin: 0px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    width: 20px;
    background-color: #5d6ab8;
    border-radius: 10px;
    margin: 0px;
  }
  .ability {
    width: 250px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    .name {
      background-color: #6ab2f1;
      border-radius: 20px 20px 0px 0px;
    }
    .description {
      background-color: #b857b8;
      padding: 20px;
      border-radius: 0px 0px 20px 20px;
    }
  }
`;
