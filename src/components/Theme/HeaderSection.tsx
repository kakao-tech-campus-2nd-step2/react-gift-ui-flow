import styled from '@emotion/styled';

import { Container } from '@/components/common/Layout/Container';
import { ThemeData } from '@/constant/ThemeData';

export interface IThemeHeader {
  path: string;
}
export const HeaderSection = ({ path }: IThemeHeader) => {
  const theme = ThemeData.find((item) => item.key === path);

  if (!theme) {
    return null;
  }
  const { backgroundColor, label, title, description } = theme;
  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <CustomContainer flexDirection="column" maxWidth="1024px">
        {label && <SubText>{label}</SubText>}
        <MainText dangerouslySetInnerHTML={{ __html: title }} />
        {description && <DescriptText dangerouslySetInnerHTML={{ __html: description }} />}
      </CustomContainer>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.section<{ backgroundColor: string }>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 54px 20px;

  @media screen and (max-width: 768px) {
    padding: 27px 20px;
  }
`;
const CustomContainer = styled(Container)`
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
const SubText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #ffffffb3;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const MainText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
const DescriptText = styled.p`
  font-size: 24px;
  color: #ffffff8c;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
