import styled from '@emotion/styled';
import React from 'react';

const StyledSection1Container = styled.section`
  width: 100%;
  height: 76px;
  padding: 18px 16px;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    object-fit: cover;
    object-position: center center;
    aspect-ratio: auto;
    width: 60px;
    height: 60px;
    border-radius: 16px;
    cursor: pointer;
  }
  p {
    padding-left: 16px;
    font-size: 25px;
    line-height: 22px;
    color: rgb(51, 51, 51);
    font-weight: 500;
  }
`;

const Section1: React.FC = () => {
  return (
    <StyledSection1Container>
      <img
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
        alt="친구 선택 유도 아이콘"
        onClick={() => alert('선물 받을 친구 선택하기')}
      />
      <p>선물 받을 친구를 선택해주세요.</p>
    </StyledSection1Container>
  );
};
export default Section1;
