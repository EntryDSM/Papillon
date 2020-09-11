import styled from 'styled-components';

import { darkBorderColor, lightPrimaryColor } from '../../../styles/colors';

export const ApplicantsList = styled.table`
  width: 100%;
  max-height: 624px;
  border: none;
  text-align: center;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const ListHeader = styled.thead`
  height: 48px;
  background: #a6ebf8;
`;

export const TH = styled.th`
  width: 14%;
  height: 48px;
  font-size: 14px;
  font-weight: 400;
  border-bottom: 1px solid ${darkBorderColor};

  &:first-child {
    width: 16%;
  }
`;

export const TR = styled.tr<{ isSelected: boolean }>`
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? lightPrimaryColor : 'white')};
`;

export const TD = styled.td`
  height: 48px;
  font-weight: 300;
  border-bottom: 1px solid #ededed;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
