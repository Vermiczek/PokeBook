import styled from "styled-components";

export const StyledSkillList = styled.div`
  .placeholder {
  }
  margin: 20px;
  display: block;

  .moves {
    margin: 0px;
    display: flex;
    overflow-y: scroll;
    max-height: 300px;
    border-radius: 0 0 20px 20px;
    flex-direction: column;

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
  }
`;
