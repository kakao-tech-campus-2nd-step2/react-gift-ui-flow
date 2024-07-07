/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from '@emotion/styled';

export const RankingContainer = styled.section`
  padding: 0px 16px 80px;
`;

export const Title = styled.h2`
  font-size: 35px;
  line-height: 50px;
  text-align: center;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 700;

  div {
    width: 60px;
    height: 60px;
    border-radius: 24px;
    background-color: ${({ active }) =>
      active ? 'rgb(70, 132, 233)' : 'rgb(230, 241, 255)'};
  }

  p {
    padding: 10px 0px 6px;
    color: ${({ active }) =>
      active ? 'rgb(70, 132, 233)' : 'rgb(102, 102, 102)'};
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 241, 255);
  border-radius: 12px;
  border: 1px solid rgba(70, 132, 233, 0.1);
`;

export const CategoryButton = styled.button<{ active: boolean }>`
  padding: 20px 30px;
  font-size: 22px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  line-height: 22px;
  border: none;
  background: none;
  color: ${({ active }) =>
    active ? 'rgb(70, 132, 233)' : 'rgba(70, 132, 233, 0.7)'};
`;
