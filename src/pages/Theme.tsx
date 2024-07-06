//import React from 'react'

import './Theme.css';

import { Link } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header';
import SubHeader from '@/components/common/Header/SubHeader';

import ranking01 from '../images/ranking01.png';

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
      //dummyItems.push({ name: `Product ${i}`, price: 29000 + i, imageUrl: {image${i}} });
    }
    return dummyItems;
  };

  const items = generateDummyItems();

  return (
    <div className="ThemePage">
      <div className="header">
        <Header>
          <Link to={'/'}>
            <HeaderTitle>선물하기</HeaderTitle>
          </Link>
          <Link to={'/login'}>
            <HeaderSubtitle>로그인</HeaderSubtitle>
          </Link>
        </Header>
      </div>
      <div className="themeContainer">
        <SubHeader
          label={'가벼운 선물'}
          title={'예산은 가볍게, 감동은 무겁게❤️'}
          description={'당신의 센서를 뽐내줄 부담 없는 선물'}
          backgroundColor={'#4C4C4C'}
        />
        <div className="themeItemContainer">
          {items.map((item) => (
            <div className="themeItem">
              <DefaultGoodsItems
                imageSrc={item.imageSrc}
                subtitle={item.subtitle}
                title={item.title}
                amount={item.amount}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer title="카카오톡 선물하기" />
    </div>
  );
};

export default Theme;
