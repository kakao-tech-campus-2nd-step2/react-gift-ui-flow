import styled from '@emotion/styled';
import { textColors } from '@styles/colors';

export const AIButtonCaption = styled.p`
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 5px;
  color: ${textColors.subtitle};
`;

export const AIButtonCaptionStrong = styled(AIButtonCaption)`
  font-size: 18px;
  line-height: 19px;
  font-weight: bold;
  color: ${textColors.default};
`;
