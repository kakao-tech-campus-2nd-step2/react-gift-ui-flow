import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index';
import { Image } from '@/components/common/Image/index';
import { Grid } from '@/components/common/layouts/Grid/index';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const themes = [
    { name: '생일', key: 'birthday' },
    { name: '스몰럭셔리', key: 'small-luxury' },
    { name: '명품선물', key: 'brand' },
    { name: '가벼운선물', key: 'light-gift' },
    { name: '시원한선물', key: 'cool-gift' },
    { name: '결혼/집들이', key: 'wedding' },
    { name: '응원/시험', key: 'cheerup' },
    { name: '팬심저격', key: 'fan-gift' },
    { name: '교환권', key: 'ecoupon' },
    { name: '건강/비타민', key: 'health' },
    { name: '과일/한우', key: 'fruit-beef' },
    { name: '출산/키즈', key: 'pregnancy' },
  ];

  const handleImageClick = () => {
    alert('선물 받을 친구 선택하기');
  };

  const handleItemClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  return (
    <>
      <FriendSection>
        <FriendContainer>
          <FriendImage
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="선물 받을 친구"
            radius={25}
            ratio="square"
            onClick={handleImageClick}
          />
          <FriendText>선물 받을 친구를 선택해주세요.</FriendText>
        </FriendContainer>
      </FriendSection>
      <ThemeSection>
        <Grid columns={{ sm: 3, md: 4, lg: 6 }} gap={20}>
          {themes.map((theme, index) => (
            <Item key={index} onClick={() => handleItemClick(theme.key)}>
              <ThemeImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt={theme.name}
                radius={30}
                ratio="square"
              />
              <ItemName>{theme.name}</ItemName>
            </Item>
          ))}
        </Grid>
      </ThemeSection>
      <AISection>
        <AIButton theme="kakao" size="large">
          <p>AI가 추천하는 선물</p>
          <h3>선물을 추천받고 싶은 친구를 선택해주세요.</h3>
        </AIButton>
      </AISection>
    </>
  );
};

const FriendSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 40px;
`;

const FriendContainer = styled.div`
  display: flex;
  max-width: 1024px;
  align-items: center;
  width: 100%;
`;

const FriendImage = styled(Image)`
  cursor: pointer;
  max-width: 70px;
  max-height: 70px;
`;

const FriendText = styled.span`
  font-size: 28px;
  color: black;
  margin-left: 20px;
`;

const ThemeSection = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const ThemeImage = styled(Image)`
  max-width: 100px;
  max-height: 100px;
`;

const ItemName = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: black;
`;

const AISection = styled.section``;

const AIButton = styled(Button)``;
