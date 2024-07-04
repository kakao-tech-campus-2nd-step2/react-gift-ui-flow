import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';


interface Theme {
  key: string;
  label: string;
  description: string;
  subDescription: string;
}

interface Gift {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  const [theme, setTheme] = useState<Theme | null>(null);
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    
    const themeData: { [key: string]: Theme } = {
      birthday: {
        key: 'birthday',
        label: '생일',
        description: '특별한 생일을 위한 선물',
        subDescription: '당신의 생일을 더욱 특별하게 만들어줄 선물들',
      },
      graduation_gift: {
        key: 'graduation_gift',
        label: '졸업선물',
        description: '새로운 시작을 축하하는 졸업선물',
        subDescription: '당신의 졸업을 축하하는 선물들',
      },
      small_luxury: {
        key: 'small_luxury',
        label: '스몰럭셔리',
        description: '당신을 위한 작은 사치, 스몰 럭셔리 아이템',
        subDescription: '',
      },
      luxury_gift: {
        key: 'luxury_gift',
        label: '명품선물',
        description: '품격있는 명품 선물 제안',
        subDescription: '소중한 이에게 명품의 품격을 선물하세요'
      },
      wedding_housewarming: {
        key: 'wedding_housewarming',
        label: '결혼/집들이',
        description: '들려오는 지인들의 좋은 소식💌',
        subDescription: '취향저격 감성파 vs 활용만점 실용파'
      },
      warm_gift: {
        key: 'warm_gift',
        label: '따뜻한 선물',
        description: '마음을 따뜻하게 해주는 선물',
        subDescription: '추운 날씨에 마음을 녹여줄 따뜻한 아이템들'
      },
      light_gift: {
        key: 'light_gift',
        label: '가벼운 선물',
        description: '예산은 가볍게, 감동은 무겁게❤️',
        subDescription: '당신의 센스를 뽐내줄 부담 없는 선물'
      },
      practical_gift: {
        key: 'practical_gift',
        label: '편식적인',
        description: '실용적이고 유용한 선물',
        subDescription: '일상 생활에서 유용하게 쓰일 아이템들'
      },
      exchange_ticket: {
        key: 'exchange_ticket',
        label: '교환권',
        description: '놓치면 후회할 교환권 특가',
        subDescription: '매주 바뀌는 혜택을 놓치지 마세요!'
      },
      health_vitamins: {
        key: 'health_vitamins',
        label: '건강/비타민',
        description: '건강을 기원하는 마음 담아 선물하세요❤️',
        subDescription: '홍삼 / 녹용 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등'
      },
      fruits_hanwoo: {
        key: 'fruits_hanwoo',
        label: '과일/한우',
        description: '정성 가득한 과일/한우 선물로 감사한 마음을 전해보세요❤️',
        subDescription: '과일, 한우, 수입소고기, 돼지고기, 전복, 견과 등'
      },
      baby_kids: {
        key: 'baby_kids',
        label: '출산/키즈',
        description: '벅찬 감동의 마음을 전할',
        subDescription: '엄마와 아이를 위한 세심한 선물👼🏻'
      }
    };

    setTheme(themeData[themeKey || '']);


    const giftsData = Array(15).fill({
      id: 1,
      name: 'BBQ 양념치킨+콜라1.25L',
      price: '29000원',
      image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    });

    setGifts(giftsData);
  }, [themeKey]);

  if (!theme) {
    return <div>Loading...</div>;
  }

  return (
    <div className="theme-container">
      <Header />

      <section className="theme-header">
        <h2>{theme.label}</h2>
        <h1>{theme.description}</h1>
        <p>{theme.subDescription}</p>
      </section>

      <section className="theme-gifts">
        <ul className="gift-list">
          {gifts.map((gift, index) => (
            <li key={index} className="gift-item">
              <img src={gift.image} alt={gift.name} className="gift-image" />
              <p>{gift.name}</p>
              <p>{gift.price}</p>
            </li>
          ))}
        </ul>
      </section>
      
    </div>
  );
};

export default ThemePage;
