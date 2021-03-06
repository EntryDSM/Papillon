import * as React from 'react';

import * as S from '../components/Statistics/style';
import RegionSelectBlock from '../components/Statistics/RegionSelectBlock';
import CompetitionTable from '../components/Statistics/CompetitionTable/index';
import CompetitionView from '../components/Statistics/CompetitionView';
import DownloadBtn from '../components/Statistics/DownloadBtn';
import { StatisticsPageContainer } from './style';
import { useStatistics } from 'hooks/index';

function Statistics() {
  const {
    statisticsStore: { selectedRegion },
  } = useStatistics();

  return (
    <StatisticsPageContainer>
      <S.mainContainer isAll={selectedRegion === 'all'}>
        <div>
          <p>Entry DSM 2021 Admin page</p>
          <h1>입학원서 접수 현황</h1>
          <RegionSelectBlock />
          {selectedRegion === 'all' ? (
            <>
              <CompetitionTable />
              <DownloadBtn />
            </>
          ) : (
            <CompetitionView isDaejeon={selectedRegion === 'daejeon'} />
          )}
        </div>
      </S.mainContainer>
    </StatisticsPageContainer>
  );
}

export default Statistics;
