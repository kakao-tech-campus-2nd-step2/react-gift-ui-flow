import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import ThemeGrid from '@/components/theme/ThemeGrid';
import InnerStyle from '@/styles/innerStyle';

const ThemeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(75, 77, 80);
  margin: 0 50px;
`;

const Inner = styled(InnerStyle)`
  padding: 27px 50px 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 768px) {
  padding: 50px 50px;
  }

  & > p:nth-of-type(1) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
  }
  h1 {
    font-size: 30px;
    line-height: 40px;
    padding-top: 12px;
    word-break: break-word;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    font-weight: 700;
    color: rgb(255, 255, 255);
  }
  & > p:nth-of-type(2) {
    padding-top: 12px;
    font-size: 24px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.55);
    word-break: break-all;
  }
  @media (max-width: 768px) {
    h1 {
    font-size: 18px;
    line-height: 26px;
    }
    & > p:nth-of-type(1) {
    font-size: 13px;
    line-height: 16px;
    }
    & > p:nth-of-type(2) {
padding-top: 5px;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Theme = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <ThemeContainer>
      <HeaderSection>
        <Inner>
          <p> '{themeKey}' 페이지에 들어왔습니다</p>
          <h1>'{themeKey}' 페이지에 들어왔습니다.</h1>
          <p> '{themeKey}' 페이지에 들어왔습니다</p>
        </Inner>
      </HeaderSection>
      <ThemeGrid />
    </ThemeContainer>
  );
};

export default Theme;
