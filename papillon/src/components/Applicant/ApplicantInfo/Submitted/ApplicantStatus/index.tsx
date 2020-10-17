import * as React from 'react';

import * as S from './style';
import { Checkbox, Button } from '../../../../common';
import { ApplicantStatus } from 'api/apiTypes';
import { useApplicant } from 'hooks/index';
import checkApiStatus from 'api/checkApiStatus';

interface Props {
  applicantStatus: ApplicantStatus;
  email: string;
}

function ApplicantStatus({ applicantStatus, email }: Props) {
  const {
    applicantStore: { updateApplicantStatusStatus },
    updateApplicantStatus,
    updateApplicantList,
    getApplicantInfo
  } = useApplicant();

  const [changedStatus, setChangedStatus] = React.useState<ApplicantStatus>(null);

  React.useEffect(() => {
    if(checkApiStatus(updateApplicantStatusStatus)._204){
      updateApplicantList({
        email,
        ...changedStatus
      });

      if(!changedStatus.is_final_submit) {
        getApplicantInfo({email});
      }

    } else if(checkApiStatus(updateApplicantStatusStatus)._400) {
      window.alert('지원자 정보 수정 권한이 없습니다.')
    } 
  }, [updateApplicantStatusStatus, changedStatus])

  const handleClickCheckbox = React.useCallback(
    (status: string) => {
      const { is_paid, is_arrived } = applicantStatus;

      if (
        status === 'is_final_submit' &&
        window.confirm('지원자의 최종제출을 취소하시겠습니까?')
      ) {
        updateApplicantStatus({
          email,
          is_final_submit: false,
        });
      }

      if (
        status === 'is_paid' &&
        window.confirm('납부여부를 수정하시겠습니까?')
      ) {
        updateApplicantStatus({
          email,
          is_paid: !is_paid,
        });
      }

      if (
        status === 'is_arrived' &&
        window.confirm('도착여부를 수정하시겠습니까?')
      ) {
        updateApplicantStatus({
          email,
          is_arrived: !is_arrived,
        });
      }

      setChangedStatus({
        ...applicantStatus,
        [status]: !applicantStatus[status]
      });
      
    },
    [applicantStatus],
  );

  return (
    <S.Wrapper>
      <S.CheckboxContainer onClick={() => handleClickCheckbox('is_arrived')}>
        <Checkbox isChecked={applicantStatus.is_arrived} />
        <p>원서 도착 여부</p>
      </S.CheckboxContainer>
      <S.CheckboxContainer onClick={() => handleClickCheckbox('is_paid')}>
        <Checkbox isChecked={applicantStatus.is_paid} />
        <p>납부 여부</p>
      </S.CheckboxContainer>
      <Button
        className="applicant-info__cancel-btn"
        onClick={() => handleClickCheckbox('is_final_submit')}
      >
        최종제출 취소
      </Button>
    </S.Wrapper>
  );
}

export default ApplicantStatus;
