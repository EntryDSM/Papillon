import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColor } from 'styles/colors';

export const headerWrapper = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
  padding: 0 375px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: absolute;
  z-index: 1;
`;

export const logo = styled.img`
  width: 93px;
  height: 29px;
`;

export const headerItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const headerItem = styled(Link)`
  color: black;
  margin: 0 25px;

  &.selected {
    color: ${primaryColor};
    font-size: 20px;
  }

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 35px;
  }
`;

export const qnaItem = styled.a`
  color: black;
  margin: 0 25px;
`;
