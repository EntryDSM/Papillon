import * as React from 'react';

import {
  ApplicantInfo,
  ApplicantsList,
  FilterSearch,
  Pagination,
} from '../components/Applicant';
import { ApplicantPageContainer } from './style';
import { useApplicant } from 'hooks/index';

function Applicant() {
  const {
    applicantStore: { currnetApplicantInfo, filters },
    getApplicantsList,
  } = useApplicant();

  React.useEffect(() => {
    getApplicantsList(filters);
  }, [filters]);

  return (
    <ApplicantPageContainer>
      <div>
        <FilterSearch />
        <ApplicantsList />
        <Pagination />
      </div>
      <div>{currnetApplicantInfo && <ApplicantInfo />}</div>
    </ApplicantPageContainer>
  );
}
export default Applicant;
