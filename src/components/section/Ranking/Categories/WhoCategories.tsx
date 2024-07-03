import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

export const WhoCategories = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Button>
        <Icon>ALL</Icon>
        <p>전체</p>
      </Button>
      <Button>
        <Icon>👩</Icon>
        <p>여성이</p>
      </Button>
      <Button>
        <Icon>👨</Icon>
        <p>남성이</p>
      </Button>
      <Button>
        <Icon>👧</Icon>
        <p>청소년이</p>
      </Button>
    </div>
  );
};

const Button = styled.button`
  &:not(:first-of-type) {
    @media screen and (min-width: ${breakpoints.sm}) {
      margin-left: 36px;
      padding-left: 16px;
    }
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    min-width: 90px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 60px;
    height: 60px;
    font-size: 20px;
    border-radius: 24px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 14px;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  background-color: rgb(70, 132, 233);
  transition: 200ms ease 0s;
`;
