/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header';
import SubHeader from '@/components/common/Header/SubHeader';

import ranking01 from '../images/ranking01.png';


const ThemePage = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const ThemeContainer = styled.div`
  padding-top: 64px;
`;

const ThemeItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
  padding: 40px calc(8% + 100px);
  margin-bottom: 100px;
`;

const ThemeItem = styled.div``;


const Theme = () => {
  // 21개 아이템 더미데이터 생성
  const generateDummyItems = () => {
    const dummyItems = [];
    for (let i = 1; i <= 21; i++) {
      dummyItems.push({
        rankingIndex: i,
        subtitle: 'BBQ',
        title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
        amount: 29000,
        imageSrc: ranking01,
      });
    }
    return dummyItems;
  };

  const items = generateDummyItems();

  return (
    <ThemePage>
      <HeaderContainer>
        <Header>
          <Link to={'/'}>
            <HeaderTitle>선물하기</HeaderTitle>
          </Link>
          <Link to={'/login'}>
            <HeaderSubtitle>로그인</HeaderSubtitle>
          </Link>
        </Header>
      </HeaderContainer>
      <ThemeContainer>
        <SubHeader
          label={'가벼운 선물'}
          title={'예산은 가볍게, 감동은 무겁게❤️'}
          description={'당신의 센서를 뽐내줄 부담 없는 선물'}
          backgroundColor={'#4C4C4C'}
        />
        <ThemeItemContainer>
          {items.map((item, index) => (
            <ThemeItem key={index}>
              <DefaultGoodsItems
                imageSrc={item.imageSrc}
                subtitle={item.subtitle}
                title={item.title}
                amount={item.amount}
              />
            </ThemeItem>
          ))}
        </ThemeItemContainer>
      </ThemeContainer>
      <Footer title="카카오톡 선물하기" />
    </ThemePage>
  );
};

export default Theme;
