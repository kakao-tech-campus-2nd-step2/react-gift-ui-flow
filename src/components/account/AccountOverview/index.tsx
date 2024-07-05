import React from 'react';
import styled from '@emotion/styled';
import { ROUTE_PATH } from '@routes/constants';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common';

export default function AccountOverview() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  return (
    <MyAccountContainer>
      <Greeting>~님 안녕하세요!</Greeting>
      <ButtonContainer>
        <Button size="small" theme="darkGray" onClick={handleClick}>
          로그아웃
        </Button>
      </ButtonContainer>
    </MyAccountContainer>
  );
}

const MyAccountContainer = styled.section`
  padding-top: 140px;
  padding-bottom: 120px;
`;

const Greeting = styled.p`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 64px;
`;

const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;
