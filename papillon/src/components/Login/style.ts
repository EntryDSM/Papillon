import styled from 'styled-components';

import { login_background } from 'assets/index';
import { lightPrimaryColor, primaryColor } from 'styles/colors';

export const background = styled.div`
  width: 39%;
  height: 100vh;
  background: url(${login_background});
  background-size: 750px 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  > h2 {
    font-size: 64px;
    margin-top: -20%;
  }

  > h3 {
    font-size: 28px;
    font-weight: 300;
    margin-top: 67px;
    line-height: 2;
  }
`;

export const contentWrapper = styled.div`
  width: 61%;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding: 0 12%;
  box-sizing: border-box;
  > img {
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
  }

  > h1 {
    font-size: 64px;
    margin-bottom: 80px;
  }

  > p {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 40px;
  }
`;

export const loginInput = styled.input`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0 40px;
  border-radius: 5px;
  border: 0;
  background-color: ${lightPrimaryColor};
  font-size: 20px;
  color: #333333;
  margin-bottom: 30px;
`;

export const loginBtn = styled.button`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: ${primaryColor};
  font-size: 28px;
  color: #ffffff;
  margin-top: 50px;
`;
