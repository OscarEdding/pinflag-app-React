import React from "react";
import { useState } from "react";

import {
  Label,
  ContainerInput,
  Inputs,
  ReadingError,
} from "../Red.style";

const ComponentInput = ({
  forlabel,
  label,
  placeholder,
  type,
  name,
  readingError,
  state,
  changeState,
  regularExpression,
}) => {
  const onChange = (e) => {
    changeState({ ...state, field: e.target.value });
  };

  const validation = () => {
    if (regularExpression) {
      if (regularExpression.test(state.field)) {
        changeState({ ...state, valid: "true" });
      } else {
        changeState({ ...state, valid: "false" });
      }
    }
  };

  return (
    <div>
      <Label for={forlabel} valid={state.valid}>
        {label}
      </Label>
      <ContainerInput>
        <Inputs
          type={type}
          name={name}
          placeholder={placeholder}
          value={state.field}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
        />
      </ContainerInput>
      <ReadingError valid={state.valid}>{readingError}</ReadingError>
    </div>
  );
};

export default ComponentInput;
