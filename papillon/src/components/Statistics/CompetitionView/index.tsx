import * as React from 'react';

import * as S from '../style';
import { useStatistics } from 'hooks/index';

interface Props {
  isDaejeon: boolean;
}

function CompetitionView({ isDaejeon }: Props) {
  const {
    statisticsStore: {
      statistics: { total_applicant_count, total_competition_rate },
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    getStatistics({ area: isDaejeon ? 'daejeon' : 'nationwide' });
  }, [isDaejeon]);

  return (
    <S.competitionViewWrapper className="no-select">
      <tbody>
        <tr>
          <S.competitionViewTH>지원자 수</S.competitionViewTH>
          <S.competitionViewTD>
            <b>{total_applicant_count}</b> 명
          </S.competitionViewTD>
        </tr>
        <tr>
          <S.competitionViewTH>경쟁률</S.competitionViewTH>
          <S.competitionViewTD>
            <b>{total_competition_rate}</b> :1
          </S.competitionViewTD>
        </tr>
      </tbody>
    </S.competitionViewWrapper>
  );
}

export default CompetitionView;
