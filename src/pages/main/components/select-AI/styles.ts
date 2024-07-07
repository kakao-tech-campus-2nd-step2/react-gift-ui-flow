import { Section } from '@/styles/globalStyles';
import styled from '@emotion/styled';

export const SelectAILayout = styled(Section)`
  padding: 16px;
`;

export const AIText = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 19px;
    padding-bottom: 5px;
  }
`;

export const AITitle = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const SelectAIContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(254, 235, 0);
  padding: 16px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`;
