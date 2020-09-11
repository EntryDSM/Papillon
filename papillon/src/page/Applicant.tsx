import * as React from 'react';

import {
  ApplicantInfo,
  ApplicantsList,
  FilterSearch,
  Pagination,
} from '../components/Applicant';
import { ApplicantPageContainer } from './style';
import Header from '../components/Header';
import { useApplicant } from 'hooks/index';

import * as S from '../components/Applicant/ApplicantInfo/Submitted/DetailInfo/style';

function Applicant() {
  const {
    applicantStore: { currnetApplicantInfo, filters },
    getApplicantsList,
  } = useApplicant();

  React.useEffect(() => {
    getApplicantsList(filters);
  }, [filters]);

  return (
    <>
      <Header />
      <ApplicantPageContainer>
        <div>
          <FilterSearch />
          <ApplicantsList />
          <Pagination />
        </div>
        <div>{currnetApplicantInfo && <ApplicantInfo />}</div>
      </ApplicantPageContainer>
    </>
  );
}
export default Applicant;
