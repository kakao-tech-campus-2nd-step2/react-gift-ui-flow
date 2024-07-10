import styled from "@emotion/styled";

import { Image } from "@/components/common/Image";
import { Trending } from "@/components/common/Trending/Trending";
import { ThemeLists } from "@/components/Theme/ThemeLists";

export const Homepage: React.FC = () => {
  return(
    <HomepageWrapper>
      <FriendsListContainer>
          <Image 
            ratio="square"
            radius='circle'
            src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202406/12/88c03a13-b0fb-4871-9312-4055e8f1e4ad.jpg"
            alt="프로필사진"
            width="100px"
          />
        <p>선물 받을 친구를 선택해주세요.</p>
        </FriendsListContainer>
      <CategoriesContainer>
          <ThemeLists />
      </CategoriesContainer>
      <AIRecommendationContainer>
        <TextContainer>
          <p>AI가 추천하는 선물!</p>
          <p>선물을 추천받고 싶은 친구를 선택해주세요.</p>
        </TextContainer>
      </AIRecommendationContainer>
      <TrendingContainer>
        <TextContainer2>
          <h2>실시간 급상승 선물랭킹</h2>
        </TextContainer2>
        <FilterAge>
          나이 필터
        </FilterAge>
        <FilterWish>
            받고 싶어한
        </FilterWish>
        <Trending />
      </TrendingContainer>
    </HomepageWrapper>
  )

}

export default Homepage;

const HomepageWrapper = styled.div`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 20vw;
  margin-right: 20vw;
  max-width: 60vw;
  min-width: 60vw;
`;

const FriendsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vw;
  max-width: 1800px;
  height: 100px;
  background-color: rgb(250, 250, 250);
  font-size: 30px;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const CategoriesContainer = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 15px;
  padding-top: 5vh;
  padding-bottom: 5vh;
  place-items: center;
`;

const AIRecommendationContainer = styled.div`
  border-radius: 20px;
  width: 500px;
  max-width: 1800px;
  padding: 10px;
  background-color: rgb(240, 191, 76);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  min-width: 100%;
`;

const TrendingContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 50vw;
  max-width: 1800px;
  background-color: #F2ECF2FF;
  display: flex;
  border-radius: 10px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const TextContainer2 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  min-width: 100%;
  margin: 10px;
`;


const FilterAge = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  border: 1px solid;
  border-radius: 20px;
`;

const FilterWish = styled.div`
  background-color: rgb(230, 241, 255);
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 80%;
`;

