import { useState } from 'react';
import styled from '@emotion/styled';
import { Grid } from '../components/common/layouts/Grid/index';
import { RankingGoodsItems } from '../components/common/GoodsItem/Ranking';
import { Button } from '../components/common/Button/index';

type RankingItem = {
  rankingIndex: number;
  subtitle: string;
  title: string;
  imageSrc: string;
  amount: number;
  category: string;
  option: string;
};

const Main = () => {
  const [selectedPersonCategory, setSelectedPersonCategory] = useState<string>('All');
  const [selectedOption, setSelectedOption] = useState<string>('받고 싶어한');
  const [showAllRankingItems, setShowAllRankingItems] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setSelectedPersonCategory(category);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleMoreClick = () => {
    setShowAllRankingItems((prev) => !prev);
  };

  const rankingItems: RankingItem[] = [
    {
      rankingIndex: 1,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: 'All',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 2,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: 'All',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 3,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: 'All',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 4,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '여성이',
      option: '많이 선물한',
    },
    {
      rankingIndex: 5,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '여성이',
      option: '많이 선물한',
    },
    {
      rankingIndex: 6,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '여성이',
      option: '위시로 받은',
    },
    {
      rankingIndex: 7,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '여성이',
      option: '위시로 받은',
    },
    {
      rankingIndex: 8,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '여성이',
      option: '위시로 받은',
    },
    {
      rankingIndex: 9,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 10,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 11,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 12,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 13,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 14,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 15,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 16,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 17,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 18,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '받고 싶어한',
    },
    {
      rankingIndex: 19,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '많이 선물한',
    },
    {
      rankingIndex: 20,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '많이 선물한',
    },
    {
      rankingIndex: 21,
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      amount: 29000,
      category: '남성이',
      option: '많이 선물한',
    },
  ];

  const filteredRankingItems = rankingItems
    .filter((item) => item.category === selectedPersonCategory || selectedPersonCategory === 'All')
    .filter((item) => item.option === selectedOption);

  const itemsToShow = showAllRankingItems ? filteredRankingItems : filteredRankingItems.slice(0, 6);

  return (
    <MainContainer>
      <ChoiceFriend>
        <div>
          <img
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="친구 선택 유도 아이콘"
          />
          <p>선물 받을 친구를 선택해주세요.</p>
        </div>
      </ChoiceFriend>
      <ThemeCategory>
        <Grid columns={6} gap={50}>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="생일"
              />
              <p>생일</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <p>졸업선물</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="스몰럭셔리"
              />
              <p>스몰럭셔리</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="명품선물"
              />
              <p>명품선물</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="결혼/집들이"
              />
              <p>결혼/집들이</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="따뜻한선물"
              />
              <p>따뜻한선물</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="가벼운선물"
              />
              <p>가벼운선물</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="팬심저격"
              />
              <p>팬심저격</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <p>교환권</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <p>건강/비타민</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <p>과일/한우</p>
            </div>
          </Item>
          <Item href="/theme/life_small_gift">
            <div>
              <img
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <p>출산/키즈</p>
            </div>
          </Item>
        </Grid>
      </ThemeCategory>
      <AiService>
        <AiServiceDiv>
          <p>AI가 추천하는 선물</p>
          <h6>선물을 추천받고 싶은 친구를 선택해주세요.</h6>
        </AiServiceDiv>
      </AiService>
      <LankSection>
        <LankContainer>
          <h2>실시간 급상승 선물랭킹</h2>
        </LankContainer>
        <CategoryBox>
          <CategoryPersonBox>
            <CategoryPersonBtn
              selected={selectedPersonCategory === 'All'}
              onClick={() => handleCategoryClick('All')}
            >
              <div>All</div>
              <p>전체</p>
            </CategoryPersonBtn>
            <CategoryPersonBtn
              selected={selectedPersonCategory === '여성이'}
              onClick={() => handleCategoryClick('여성이')}
            >
              <div>👩🏻‍🦳</div>
              <p>여성이</p>
            </CategoryPersonBtn>
            <CategoryPersonBtn
              selected={selectedPersonCategory === '남성이'}
              onClick={() => handleCategoryClick('남성이')}
            >
              <div>👨🏻‍🦳</div>
              <p>남성이</p>
            </CategoryPersonBtn>
            <CategoryPersonBtn
              selected={selectedPersonCategory === '청소년이'}
              onClick={() => handleCategoryClick('청소년이')}
            >
              <div>👦🏻</div>
              <p>청소년이</p>
            </CategoryPersonBtn>
          </CategoryPersonBox>
          <OptionBox>
            <OptionBtn
              selected={selectedOption === '받고 싶어한'}
              onClick={() => handleOptionClick('받고 싶어한')}
            >
              받고 싶어한
            </OptionBtn>
            <OptionBtn
              selected={selectedOption === '많이 선물한'}
              onClick={() => handleOptionClick('많이 선물한')}
            >
              많이 선물한
            </OptionBtn>
            <OptionBtn
              selected={selectedOption === '위시로 받은'}
              onClick={() => handleOptionClick('위시로 받은')}
            >
              위시로 받은
            </OptionBtn>
          </OptionBox>
        </CategoryBox>
        <RankingListBox>
          <Grid columns={6} gap={10}>
            {itemsToShow.map((item) => (
              <RankingGoodsItems
                key={item.rankingIndex}
                rankingIndex={item.rankingIndex}
                subtitle={item.subtitle}
                title={item.title}
                imageSrc={item.imageSrc}
                amount={item.amount}
              />
            ))}
          </Grid>
          <MoreBox>
            <Button theme="outline" size="responsive" onClick={handleMoreClick}>
              {showAllRankingItems ? '접기' : '더보기'}
            </Button>
          </MoreBox>
        </RankingListBox>
      </LankSection>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChoiceFriend = styled.section`
  padding: 40px 16px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 70px;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-size: 25px;
    line-height: 22px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    padding-left: 16px;
  }
`;

const ThemeCategory = styled.section`
  padding: 45px 52px 23px;
`;

const Item = styled.a`
  color: black;
  text-decoration: none;
  outline: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90px;
      border-radius: 32px;
    }
    p {
      padding-top: 7px;
    }
  }
`;

const AiService = styled.section`
  padding: 16px;
`;
const AiServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #feeb00;
  padding: 16px;
  border-radius: 8px;
  p {
    font-size: 17px;
    line-height: 19px;
    padding-bottom: 5px;
    color: rgba(0, 0, 0, 0.4);
  }
  h6 {
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
  }
`;

const LankSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 35px;
    font-weight: 700;
  }
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 7px;
`;

const CategoryPersonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CategoryPersonBtn = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  div {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    font-size: 20px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: ${({ selected }) => (selected ? 'rgb(70, 132, 233)' : 'rgb(230, 241, 255)')};
  }
  p {
    color: ${({ selected }) => (selected ? 'rgb(70, 132, 233)' : 'rgb(102, 102, 102)')};
    font-weight: ${({ selected }) => (selected ? '700' : '400')};
    padding: 10px 0 6px;
  }
`;

const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: rgb(230, 241, 255);
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 12px;
`;
const OptionBtn = styled.button<{ selected: boolean }>`
  padding: 20px 30px 20px;
  font-size: 22px;
  outline: none;
  color: ${({ selected }) => (selected ? 'rgb(70, 132, 233)' : 'rgba(70, 132, 233, 0.7)')};
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
`;

const RankingListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 60px;
`;

const MoreBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  button {
    width: 500px;
    outline: none;
  }
`;
