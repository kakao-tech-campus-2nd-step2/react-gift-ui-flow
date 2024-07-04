import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledSection2Container = styled.section`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Section3Link = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding-top: 20px;
  &:focus {
    outline: none;
  }
`;

const Section3Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 40px;
`;

const Label = styled.div`
  padding-top: 15px;
  font-size: 18px;
  line-height: 17px;
  color: rgb(51, 51, 51);
`;

const imageUrl =
  'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png';

const labels = [
  '생일',
  '졸업선물',
  '스몰 럭셔리',
  '명품선물',
  '결혼/집들이',
  '따뜻한선물',
  '가벼운선물',
  '팬심저격',
  '교환권',
  '건강/비타민',
  '과일/한우',
  '출산/키즈',
];

const Section2: React.FC = () => {
  return (
    <StyledSection2Container>
      {labels.map((label, index) => (
        <Section3Link key={index} to="/theme">
          <Section3Img src={imageUrl} alt={`${index + 1}`} />
          <Label>{label}</Label>
        </Section3Link>
      ))}
    </StyledSection2Container>
  );
};

export default Section2;
