import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import { Image } from '@/components/common/Image/Image'
import { Grid } from '@/components/common/Layouts/Grid/Grid'
import ThemeFooter from '@/components/theme/ThemeFooter';
import ThemeHeader from '@/components/theme/ThemeHeader';

import { themes } from './Theme'

const ThemeCategory: React.FC = () => {
  return (
    <ThemeContainer>
      <ThemeHeader />
      <MainContent>
        <StyledGrid columns={6} gap={20}>
          {themes.map( (theme) => (
            <ThemeLink key={theme.key} to={`/theme/${theme.key}`}>
              <ThemeItem>
                <ThemeImage>
                  <Image src={theme.src} width='60px' ratio='square' radius={20} />
                </ThemeImage>
                {theme.name}
              </ThemeItem>
            </ThemeLink>
          ))}
        </StyledGrid>
      </MainContent>
      <ThemeFooter />
    </ThemeContainer>
  )
}

export default ThemeCategory

// 기존의 HTML 태그를 스타일링 할 때는 styled.{tagName}
// 라이브러리에서 제공되는 컴포넌트를 스타일링 할 때는 styled.(componentName)
const ThemeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledGrid = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1024px;
  width: 100%;
`;

const ThemeLink = styled(Link)`
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 200;
  &:hover {
    background-color: #fff;
  }
`;

const ThemeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ThemeImage = styled.div`
    margin-top: 20px;
    margin-bottom: 3px; 
`;