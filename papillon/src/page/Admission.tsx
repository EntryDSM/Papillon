import * as React from 'react';

import { AdmissionPageContainer } from './style';
import Header from '../components/Header';
import {
  AdmissionTicketSample,
  ContentContainer,
  DownloadBtn,
} from '../components/Admission';
import { ex_examination_slip } from 'assets/index';

function Admission() {
  return (
    <>
      <Header />
      <AdmissionPageContainer>
        <ContentContainer>
          <p>Entry DSM 2021 Admin page</p>
          <h1>수험표 출력</h1>
          <p>아래의 이미지와 같은 양식으로 지원자들의 수험표를 출력합니다</p>
          <AdmissionTicketSample src={ex_examination_slip} />
          <DownloadBtn />
        </ContentContainer>
      </AdmissionPageContainer>
    </>
  );
}

export default Admission;
