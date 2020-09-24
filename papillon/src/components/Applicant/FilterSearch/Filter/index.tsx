import * as React from 'react';

import * as S from './style';
import { Checkbox } from '../../../common';
import { useApplicant } from 'hooks/index';

function Filter() {
  const {
    applicantStore: { filters },
    setFilter,
  } = useApplicant();

  const checkLists = [
    { content: '대전', value: 'is_daejeon' },
    { content: '전국', value: 'is_nationwide' },
    { content: '원서 미도착', value: 'not_arrived' },
    { content: '미납자', value: 'not_paid' },
    { content: '일반 전형', value: 'is_common' },
    { content: '마이스터 전형', value: 'is_meister' },
    { content: '사회통합 전형', value: 'is_social' },
  ];

  const handleChangeFilter = (value: string) => {
    let newFilter = { index: 1 };

    if (value === 'is_daejeon' && !filters[value] && filters['is_nationwide']) {
      newFilter['is_daejeon'] = true;
      newFilter['is_nationwide'] = null;
    } else if (
      value === 'is_nationwide' &&
      !filters[value] &&
      filters['is_daejeon']
    ) {
      newFilter['is_nationwide'] = true;
      newFilter['is_daejeon'] = null;
    } else {
      newFilter[value] = !filters[value] || null;
    }

    setFilter(newFilter);
  };

  return (
    <S.FilterWrapper>
      {checkLists.map((item) => (
        <S.FilterItemContainer
          key={item.value}
          onClick={() => handleChangeFilter(item.value)}
        >
          <Checkbox isChecked={filters[item.value]} />
          <p>{item.content}</p>
        </S.FilterItemContainer>
      ))}
    </S.FilterWrapper>
  );
}

export default Filter;
