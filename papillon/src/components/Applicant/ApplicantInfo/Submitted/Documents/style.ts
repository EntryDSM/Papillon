import styled from 'styled-components';

import { accentColor } from 'styles/colors';

export const Wrapper = styled.div`
  margin-top: 36px;
`;

export const ContentSelector = styled.div`
  border-bottom: solid 1px ${accentColor};
  > span {
    font-size: 16px;
    padding: 10px;
    display: inline-block;
    cursor: pointer;

    &.selected {
      border-bottom: solid 4px ${accentColor};
    }
  }
`;

export const Document = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 2.25;
  margin-top: 20px;
`;
