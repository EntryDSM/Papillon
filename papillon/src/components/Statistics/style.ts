import styled from 'styled-components';

import {
  darkPrimaryColor,
  primaryTextColor,
  primaryColor,
} from '../../styles/colors';

export const mainContainer = styled.div<{ isAll?: boolean }>`
  width: 70%;
  ${({ isAll }) => isAll && 'height: 100vh'};
  background: white;

  p {
    font-size: 20px;
    color: ${darkPrimaryColor};
    margin-top: 8%;
    letter-spacing: 0.72px;
  }

  h1 {
    font-size: 52px;
    color: ${primaryTextColor};
    margin-top: 1%;
    letter-spacing: 2.56px;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const regionSelectConatiner = styled.ul`
  display: flex;
  margin-top: 2%;
`;

export const regionSelectItem = styled.li`
  width: 120px;
  height: 60px;
  font-size: 22px;
  letter-spacing: 1.2px;
  color: ${primaryTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :nth-child(2) {
    margin: 0 110px;
  }

  &.selected {
    border-radius: 36px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${primaryColor};
    color: white;
  }
`;

export const competitionTableWrapper = styled.div`
  width: 40%;
  background-color: #ffffff;
  margin-top: 2%;

  > table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    -webkit-text-stroke: 0.5px #ffffff;
    font-size: 14px;
    font-weight: bold;
    color: ${primaryTextColor};
    padding: 0;
    text-align: center;
  }

  > div {
    height: 2%;
    border-left: 1px solid ${primaryTextColor};
    border-right: 1px solid ${primaryTextColor};
  }

  > tr,
  td {
    border: 1px solid ${primaryTextColor};
    height: 24px;
  }
`;

export const competitionViewWrapper = styled.table`
  width: 45%;
  font-size: 40px;
  margin-top: 250px;
  tr:last-child {
    width: 100%;
    padding-top: 60px;
  }

  tr {
    line-height: 100px;
  }
`;

export const competitionViewTH = styled.th`
  width: 35%;
  font-weight: 400;
  color: ${primaryTextColor};
`;

export const competitionViewTD = styled.td`
  width: 65%;
  color: ${primaryTextColor};
  text-align: right;

  > b {
    font-weight: 500;
    color: ${primaryColor};
  }
`;
