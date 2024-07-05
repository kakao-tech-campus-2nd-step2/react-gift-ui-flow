import { useState } from 'react';

const useGiftRanking = () => {
  const [filter, setFilter] = useState('전체');
  const [subFilter, setSubFilter] = useState('받고 싶어한');
  const [showMore, setShowMore] = useState(false);

  const items = [
    {
      id: 1,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 2,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 3,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 4,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 5,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 6,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 7,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 8,
      brand: 'BBQ',
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29,000원',
      imageUrl:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
  ];

  const filteredItems = items;

  return { filteredItems, filter, setFilter, subFilter, setSubFilter, showMore, setShowMore };
};

export default useGiftRanking;
