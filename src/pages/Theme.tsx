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
  padding: 50px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(75, 77, 80);
`;

const Inner = styled(InnerStyle)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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
