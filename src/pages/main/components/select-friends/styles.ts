import { Section } from '@/styles/GlobalStyles';
import styled from '@emotion/styled';

export const SelectFriendsLayout = styled(Section)`
  width: 100%;
  height: 76px;
  padding: 18px 16px;
  background-color: rgb(250, 250, 250);

  @media screen and (min-width: 768px) {
    height: 150px;
    padding: 40px 16px;
  }
`;

export const FriendImg = styled.img`
  object-fit: cover;
  object-position: center center;
  aspect-ratio: auto;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
  overflow: clip;
`;

export const Text = styled.p`
  padding-left: 16px;
  font-size: 17px;
  line-height: 22px;
  color: rgb(51, 51, 51);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 35px;
  }
`;
