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
`;
const CustomContainer = styled(Container)`
  gap: 20px;
`;
const SubText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #ffffffb3;
`;
const MainText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
const DescriptText = styled.p`
  font-size: 24px;
  color: #ffffff8c;
`;
