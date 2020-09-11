import styled from 'styled-components';

import { lightBorderColor } from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 36px;

  &:last-child {
    margin-right: 60px;
  }

  > p {
    font-size: 14px;
    color: ${lightBorderColor};
    margin-left: 18px;
  }
`;
