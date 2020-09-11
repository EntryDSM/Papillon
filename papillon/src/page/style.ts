import styled from 'styled-components';

import { darkBorderColor } from 'styles/colors';

export const StatisticsPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #e0faff;
  position: relative;
`;

export const ApplicantPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fcfcfc;
  box-sizing: border-box;
  padding-top: 60px;

  > div:first-child {
    flex: 4;
    border-right: solid ${darkBorderColor} 1px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  > div:last-child {
    flex: 3;
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
`;

export const AdmissionPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #e0faff;
`;
