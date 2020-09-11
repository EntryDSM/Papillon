import * as React from 'react';

import * as S from '../style';
import { useStatistics } from 'hooks/index';

function CompetitionTable() {
  const {
    statisticsStore: {
      statistics: {
        daejeon,
        nationwide,
        total_applicant_count,
        total_competition_rate,
      },
      statistics,
      selectedRegion,
    },
    getStatistics,
  } = useStatistics();

  React.useEffect(() => {
    getStatistics({ area: 'all' });
  }, [selectedRegion]);

  return (
    <S.competitionTableWrapper>
      <table>
        <tbody>
          <tr>
            <td rowSpan={2} colSpan={2}>
              구분
            </td>
            <td colSpan={2}>지원자</td>
            <td colSpan={2}>경쟁률</td>
          </tr>
          <tr>
            <td>대전</td>
            <td>전국</td>
            <td>대전</td>
            <td>전국</td>
          </tr>
          <tr>
            <td rowSpan={2}>특별전형</td>
            <td>마이스터</td>
            <td>{daejeon?.meister_applicant.applicant_count || '0'}</td>
            <td>{nationwide?.meister_applicant.applicant_count || '0'}</td>
            <td>{daejeon?.meister_applicant.competition_rate || '0'}:1</td>
            <td>{nationwide?.meister_applicant.competition_rate || '0'}:1</td>
          </tr>
          <tr>
            <td>사회통합</td>
            <td>{daejeon?.social_applicant.applicant_count || '0'}</td>
            <td>{nationwide?.social_applicant.applicant_count || '0'}</td>
            <td>{daejeon?.social_applicant.competition_rate || '0'}:1</td>
            <td>{nationwide?.social_applicant.competition_rate || '0'}:1</td>
          </tr>
          <tr>
            <td colSpan={2}>일반</td>
            <td>{daejeon?.common_applicant.applicant_count || '0'}</td>
            <td>{nationwide?.common_applicant.applicant_count || '0'}</td>
            <td>{daejeon?.common_applicant.competition_rate || '0'}:1</td>
            <td>{nationwide?.common_applicant.competition_rate || '0'}:1</td>
          </tr>
          <tr>
            <td colSpan={2}>소계</td>
            <td>{daejeon?.total_applicant_count || '0'}</td>
            <td>{nationwide?.total_applicant_count || '0'}</td>
            <td>{daejeon?.total_competition_rate || '0'}:1</td>
            <td>{nationwide?.total_competition_rate || '0'}:1</td>
          </tr>
          <tr>
            <td colSpan={2}>총계</td>
            <td colSpan={2}>{total_applicant_count}</td>
            <td colSpan={2}>{total_competition_rate}:1</td>
          </tr>
        </tbody>
      </table>
      <div />
      <table>
        <tbody>
          <tr>
            <td rowSpan={2}>환산점수</td>
            <td colSpan={3}>전국</td>
            <td colSpan={3}>대전</td>
          </tr>
          <tr>
            <td>일반전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
            <td>일반전형</td>
            <td>마이스터</td>
            <td>사회통합</td>
          </tr>
          <tr>
            <td>141~150</td>
            <td>{nationwide?.common_applicant['141-150'] || '0'}</td>
            <td>{nationwide?.meister_applicant['141-150'] || '0'}</td>
            <td>{nationwide?.social_applicant['141-150'] || '0'}</td>
            <td>{daejeon?.common_applicant['141-150'] || '0'}</td>
            <td>{daejeon?.meister_applicant['141-150'] || '0'}</td>
            <td>{daejeon?.social_applicant['141-150'] || '0'}</td>
          </tr>
          <tr>
            <td>131~140</td>
            <td>{nationwide?.common_applicant['131-140'] || '0'}</td>
            <td>{nationwide?.meister_applicant['131-140'] || '0'}</td>
            <td>{nationwide?.social_applicant['131-140'] || '0'}</td>
            <td>{daejeon?.common_applicant['131-140'] || '0'}</td>
            <td>{daejeon?.meister_applicant['131-140'] || '0'}</td>
            <td>{daejeon?.social_applicant['131-140'] || '0'}</td>
          </tr>
          <tr>
            <td>121~130</td>
            <td>{nationwide?.common_applicant['121-130'] || '0'}</td>
            <td>{nationwide?.meister_applicant['121-130'] || '0'}</td>
            <td>{nationwide?.social_applicant['121-130'] || '0'}</td>
            <td>{daejeon?.common_applicant['121-130'] || '0'}</td>
            <td>{daejeon?.meister_applicant['121-130'] || '0'}</td>
            <td>{daejeon?.social_applicant['121-130'] || '0'}</td>
          </tr>
          <tr>
            <td>111~120</td>
            <td>{nationwide?.common_applicant['111-120'] || '0'}</td>
            <td>{nationwide?.meister_applicant['111-120'] || '0'}</td>
            <td>{nationwide?.social_applicant['111-120'] || '0'}</td>
            <td>{daejeon?.common_applicant['111-120'] || '0'}</td>
            <td>{daejeon?.meister_applicant['111-120'] || '0'}</td>
            <td>{daejeon?.social_applicant['111-120'] || '0'}</td>
          </tr>
          <tr>
            <td>101~110</td>
            <td>{nationwide?.common_applicant['101-110'] || '0'}</td>
            <td>{nationwide?.meister_applicant['101-110'] || '0'}</td>
            <td>{nationwide?.social_applicant['101-110'] || '0'}</td>
            <td>{daejeon?.common_applicant['101-110'] || '0'}</td>
            <td>{daejeon?.meister_applicant['101-110'] || '0'}</td>
            <td>{daejeon?.social_applicant['101-110'] || '0'}</td>
          </tr>
          <tr>
            <td>91~100</td>
            <td>{nationwide?.common_applicant['91-100'] || '0'}</td>
            <td>{nationwide?.meister_applicant['91-100'] || '0'}</td>
            <td>{nationwide?.social_applicant['91-100'] || '0'}</td>
            <td>{daejeon?.common_applicant['91-100'] || '0'}</td>
            <td>{daejeon?.meister_applicant['91-100'] || '0'}</td>
            <td>{daejeon?.social_applicant['91-100'] || '0'}</td>
          </tr>
          <tr>
            <td>81~90</td>
            <td>{nationwide?.common_applicant['81-90'] || '0'}</td>
            <td>{nationwide?.meister_applicant['81-90'] || '0'}</td>
            <td>{nationwide?.social_applicant['81-90'] || '0'}</td>
            <td>{daejeon?.common_applicant['81-90'] || '0'}</td>
            <td>{daejeon?.meister_applicant['81-90'] || '0'}</td>
            <td>{daejeon?.social_applicant['81-90'] || '0'}</td>
          </tr>
          <tr>
            <td>71~80</td>
            <td>{nationwide?.common_applicant['71-80'] || '0'}</td>
            <td>{nationwide?.meister_applicant['71-80'] || '0'}</td>
            <td>{nationwide?.social_applicant['71-80'] || '0'}</td>
            <td>{daejeon?.common_applicant['71-80'] || '0'}</td>
            <td>{daejeon?.meister_applicant['71-80'] || '0'}</td>
            <td>{daejeon?.social_applicant['71-80'] || '0'}</td>
          </tr>
          <tr>
            <td>70이하</td>
            <td>{nationwide?.common_applicant['-70'] || '0'}</td>
            <td>{nationwide?.meister_applicant['-70'] || '0'}</td>
            <td>{nationwide?.social_applicant['-70'] || '0'}</td>
            <td>{daejeon?.common_applicant['-70'] || '0'}</td>
            <td>{daejeon?.meister_applicant['-70'] || '0'}</td>
            <td>{daejeon?.social_applicant['-70'] || '0'}</td>
          </tr>
        </tbody>
      </table>
    </S.competitionTableWrapper>
  );
}

export default CompetitionTable;
