import React from "react";
import { StyledInput } from "../../styles/InputField.styled";

interface props {
  callbackFunction: Function;
  inputName: string;
}

//Component responsible for processing the input data from user.
export const InputField = ({ callbackFunction, inputName }: props) => {
  return (
    <StyledInput>
      <input
        type="text"
        //value={copy}
        onChange={(e) => {
          callbackFunction(
            e.target.value.slice().toLowerCase().replace(" ", "-")
          );
        }}
        required
      />
      <span className="placeholder">{inputName}</span>
      <div className="suggestions"></div>
    </StyledInput>
  );
};

export default InputField;
