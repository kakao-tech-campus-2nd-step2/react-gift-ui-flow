import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import { Banner } from '@/components/common/Banner/Banner';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import GoodsList from '@/components/ThemeComponents/GoodsList';

const ThemePage = () => {
  const { themeKey } = useParams();
  const [bannerProps, setBannerProps] = useState({
    label: 'Birthday',
    title: '행복한 생일을 축하합니다!',
    description: '특별한 선물로 기쁨을 나누어요',
    backgroundColor: '#FF5733',
  });

  useEffect(() => {
    switch (themeKey) {
      case 'Birthday':
        setBannerProps({
          label: themeKey,
          title: '행복한 생일을 축하합니다!',
          description: '특별한 선물로 기쁨을 나누어요',
          backgroundColor: '#FF5733',
        });
        break;
      case 'GraduationGift':
        setBannerProps({
          label: themeKey,
          title: '신나는 졸업을 축하합니다!',
          description: '새로운 시작을 응원하는 선물',
          backgroundColor: '#FFD700',
        });
        break;
      case 'SmallLuxury':
        setBannerProps({
          label: themeKey,
          title: '소소하지만 럭셔리한 선물',
          description: '퀄리티와 감각이 느껴지는 선물',
          backgroundColor: '#6A5ACD',
        });
        break;
      case 'LuxuryGift':
        setBannerProps({
          label: themeKey,
          title: '특별한 사람에게 특별한 선물',
          description: '프리미엄 명품으로 감동을 선사하세요',
          backgroundColor: '#8B008B',
        });
        break;
      case 'Marriage':
        setBannerProps({
          label: themeKey,
          title: '새로운 시작을 축하합니다!',
          description: '집을 꾸미는 따뜻한 마음을 담은 선물',
          backgroundColor: '#FF6347',
        });
        break;
      case 'WarmGift':
        setBannerProps({
          label: themeKey,
          title: '따뜻한 마음을 전하는 선물',
          description: '작은 관심이 큰 힘이 되는 선물',
          backgroundColor: '#FF7F50',
        });
        break;
      case 'LightGift':
        setBannerProps({
          label: themeKey,
          title: '예산은 가볍게, 감동은 무겁게❤️',
          description: '당신의 센스를 뽐내줄 부담 없는 선물',
          backgroundColor: '#4b4d50',
        });
        break;
      case 'FanGift':
        setBannerProps({
          label: themeKey,
          title: '팬심을 저격하는 특별한 선물',
          description: '좋아하는 그를 위한 최고의 선택',
          backgroundColor: '#9370DB',
        });
        break;
      case 'ExchangeCard':
        setBannerProps({
          label: themeKey,
          title: '선물의 자유를 선사하는 교환권',
          description: '마음에 드는 선물을 고르는 즐거움',
          backgroundColor: '#00CED1',
        });
        break;
      case 'Health':
        setBannerProps({
          label: themeKey,
          title: '건강하고 행복한 선물',
          description: '건강을 생각하는 마음을 담은 선물',
          backgroundColor: '#00FF7F',
        });
        break;
      case 'Food':
        setBannerProps({
          label: themeKey,
          title: '풍성한 축복을 담은 선물',
          description: '신선함이 가득한 과일과 한우 선물',
          backgroundColor: '#B0E0E6',
        });
        break;
      case 'Birth':
        setBannerProps({
          label: themeKey,
          title: '행복한 시작을 응원하는 선물',
          description: '새 생명을 축복하는 따뜻한 마음',
          backgroundColor: '#FF1493',
        });
        break;
      default:
        setBannerProps({
          label: '기타',
          title: '다양한 주제로 준비된 선물',
          description: '특별한 순간을 위한 다양한 선택',
          backgroundColor: '#808080',
        });
        break;
    }
  }, [themeKey]);

  return (
    <>
      <Header />
      <Banner {...bannerProps} />
      <GoodsList />
      <Footer />
    </>
  );
};

export default ThemePage;