import * as React from 'react';

import * as S from './style';
import { useApplicant } from 'hooks/index';
import { getIndexList } from 'utils/pagination';

function Pagination() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);

  const {
    applicantStore: {
      applicantsList: { max_index },
    },
  } = useApplicant();

  React.useEffect(() => {
    setIndexList(getIndexList(currentIndex, max_index));
  }, [max_index, currentIndex]);

  const handleClickIndex = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  const handleClickPrev = React.useCallback(() => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
  }, [currentIndex, max_index]);
  const handleClickNext = React.useCallback(() => {
    if (currentIndex < max_index) setCurrentIndex(currentIndex + 1);
  }, [currentIndex, max_index]);

  return (
    <S.PaginationContainer>
      <S.PageBtn className="move-btn" onClick={handleClickPrev}>
        {'<'}
      </S.PageBtn>
      {indexList.map(i => (
        <S.PageBtn
          key={i.toString()}
          className={currentIndex === i && 'selected'}
          onClick={() => handleClickIndex(i)}
        >
          {i}
        </S.PageBtn>
      ))}
      <S.PageBtn className="move-btn" onClick={handleClickNext}>
        {'>'}
      </S.PageBtn>
    </S.PaginationContainer>
  );
}
export default Pagination;