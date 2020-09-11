import * as React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as S from './style';
import { logo } from 'assets/index';
import { Button } from '../common';
import { clearStorage } from 'utils/token';

function Header() {
  const location = useLocation();
  const history = useHistory();

  const headerItems = [
    {
      link: '/admission',
      content: '수험표',
    },
    {
      link: '/',
      content: '통계',
    },
    {
      link: '/applicant',
      content: '지원자 목록',
    },
  ];

  const handleClickButton = React.useCallback(() => {
    clearStorage();
    history.go(0);
  }, []);

  return (
    <S.headerWrapper>
      <Link to="/">
        <S.logo src={logo} alt="Entry logo" />
      </Link>

      <S.headerItemContainer>
        <S.qnaItem href="https://messenger.entrydsm.hs.kr" target="_blank">
          QnA
        </S.qnaItem>
        {headerItems.map(item => (
          <S.headerItem
            key={item.content}
            to={item.link}
            className={location.pathname === item.link && 'selected'}
          >
            {item.content}
          </S.headerItem>
        ))}
        <Button className="header__logout-btn" onClick={handleClickButton}>
          로그아웃
        </Button>
      </S.headerItemContainer>
    </S.headerWrapper>
  );
}

export default Header;
