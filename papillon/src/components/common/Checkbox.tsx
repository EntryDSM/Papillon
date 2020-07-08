import * as React from "react";
import styled from "styled-components";

import { checked } from "../../assets";

const CheckboxWrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background: #ededed;
  border: solid #9b9b9b 1px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Check = styled.img`
  width: 1rem;
`;

interface Props {
  isChecked: boolean;
}

const Checkbox: React.FC<Props> = ({ isChecked }) => (
  <CheckboxWrapper>
    {isChecked && <Check src={checked} alt="checked" />}
  </CheckboxWrapper>
);

export default Checkbox;
