import styled from "@emotion/styled";
import Banner from "..";

const ThemeBanner = () => {
  //TODO: 컬러 상수화 하기
  return (
    <Banner backgroundColor="#4B4D50">
      <StyledThemeBanner>
        <p className="subtitle">가벼운 선물</p>
        <p className="title">예산은 가볍게, 감동은 무겁게 ❤️</p>
        <p className="description">당신의 센스를 뽐내줄 부담 없는 선물</p>
      </StyledThemeBanner>
    </Banner>
  );
};

const StyledThemeBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  padding-block: 32px;

  p {
    margin: 0; // 기본 마진 제거
  }

  .subtitle {
    font-weight: 500;
    color: #c9cacb;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
    color: white;
  }

  .description {
    font-weight: 500;
    color: #c9cacb;
  }
`;

export default ThemeBanner;
