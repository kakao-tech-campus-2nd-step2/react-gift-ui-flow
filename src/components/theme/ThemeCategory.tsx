import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import { Image } from '@/components/common/Image/Image'
import { Grid } from '@/components/common/Layouts/Grid/Grid'
import ThemeFooter from '@/components/theme/ThemeFooter';
import ThemeHeader from '@/components/theme/ThemeHeader';

const ThemeCategory: React.FC = () => {
  const themes = [
    { key: '1', name: '생일', src: 'https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240417111629_616eccb9d4cd464fa06d3430947dce15.jpg' },
    { key: '2', name: '졸업 선물', src: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230822215558_21704445865c4dd2aa62d1d08c638778.jpg' },
    { key: '3', name: '스몰 럭셔리', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240620131349_b18e29d16a554ca3b8600dbefce6b75c.jpg' },
    { key: '4', name: '명품 선물', src: 'https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20201113110103_c6f6cddc6bf04f06be7cbd50329201e1.jpg' },
    { key: '5', name: '결혼/집들이', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240530084619_cbd8d48dfa244611821cefad235f5977.jpg' },
    { key: '6', name: '따뜻한 선물', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240528154243_ce80237207fc44e19a40c024d0229bc8.jpg' },
    { key: '7', name: '가벼운 선물', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240614093600_c91127a557824d44bc559a4586db0bd3.jpg' },
    { key: '8', name: '팬심 저격', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240626144435_f33aa632e99c4faebb39413d59e0e2eb.jpg' },
    { key: '9', name: '교환권', src: 'https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240613144304_821f8c2b12be405ea7648d0039beb431.jpg' },
    { key: '10', name: '건강/비타민', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240513132515_5d1e6b4d541b4e0b8ee0930efa70131b.jpg' },
    { key: '11', name: '과일/한우', src: 'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240516094905_425d02258d7d4fffaccc7219285a951d.jpg' },
    { key: '12', name: '출산/키즈', src: 'https://img1.kakaocdn.net/thumb/C414x414@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220822225448_9aae6412d6f846a8ad681c7a3bf05306.jpg' },
  ]

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