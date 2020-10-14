import styled from 'styled-components';

import { darkPrimaryColor, primaryTextColor } from '../../styles/colors';

export const ContentContainer = styled.div`
  width: 70%;
  height: 100%;
  background: white;
  box-sizing: border-box;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 58px;
    color: ${primaryTextColor};
    margin-top: 2%;
    margin-bottom: 2%;
    letter-spacing: 2.56px;
  }

  p {
    font-size: 20px;
    color: ${darkPrimaryColor};
    letter-spacing: 0.72px;

    &:first-child {
      margin-top: 8%;
    }
  }
`;

export const AdmissionTicketSample = styled.img`
  width: 632px;
  height: 414px;
  margin-top: 4%;
`;
