import styled from 'styled-components';

import { darkPrimaryColor, primaryTextColor } from '../../styles/colors';

export const ContentContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding-top: 7%;

  > h1 {
    font-size: 58px;
    color: ${primaryTextColor};
    margin-top: 2%;
    margin-bottom: 4%;
    letter-spacing: 2.56px;
  }

  > p {
    font-size: 20px;
    color: ${darkPrimaryColor};
    letter-spacing: 0.72px;
  }
`;

export const AdmissionTicketSample = styled.img`
  width: 632px;
  height: 414px;
  margin-top: 4%;
`;
