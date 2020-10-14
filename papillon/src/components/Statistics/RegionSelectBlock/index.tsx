import * as React from 'react';

import * as S from '../style';
import { useStatistics } from 'hooks/index';

function RegionSelectBlock() {
  const {
    statisticsStore: { selectedRegion },
    setSelectedRegion,
    getStatistics,
  } = useStatistics();

  const regions = [
    { content: '전체', id: 'all' },
    { content: '대전', id: 'daejeon' },
    { content: '전국', id: 'nationwide' },
  ];

  const handleClickRegion = React.useCallback(
    region => {
      getStatistics({ area: region });
      setSelectedRegion({ selectedRegion: region });
    },
    [selectedRegion],
  );

  return (
    <S.regionSelectConatiner className="no-select">
      {regions.map(region => (
        <S.regionSelectItem
          className={selectedRegion === region.id && 'selected'}
          onClick={() => handleClickRegion(region.id)}
          key={region.id}
        >
          {region.content}
        </S.regionSelectItem>
      ))}
    </S.regionSelectConatiner>
  );
}

export default RegionSelectBlock;
