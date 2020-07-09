import styled from 'styled-components';

import Checkbox from './Checkbox';

export const Button = styled.button`
  &.applicant-list__excel-btn {
    width: 102px;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
  }
  &.applicant-info__cancel-btn {
    width: 110px;
    height: 32px;
    border-radius: 4px;
    font-size: 14px;
  }
  &.header__logout-btn {
    width: 88px;
    height: 28px;
    border-radius: 17px;
    font-size: 16px;
  }
  &.admission-ticket__download-btn {
    width: 200px;
    height: 60px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 24px;
  }
`;

export { Checkbox };
