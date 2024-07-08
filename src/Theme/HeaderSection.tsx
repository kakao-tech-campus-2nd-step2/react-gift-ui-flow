import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

type HeaderProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

const HeaderSection = ({ label, title, description, backgroundColor }: HeaderProps) => {
  return (
    <Banner backgroundColor={backgroundColor}>
      <Container>
        <BannerText>
          <Label>{label}</Label>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </BannerText>
      </Container>
    </Banner>
  );
};

export default HeaderSection;

const Banner = styled.div<{ backgroundColor: string }>`
  width: 100%;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 40px 0px;
  margin-bottom: 20px;
`;

const BannerText = styled.div`
  margin: 0 auto;
`;

const Label = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
`;
