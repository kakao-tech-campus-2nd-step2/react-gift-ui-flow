import styled from '@emotion/styled';
import { textColors } from '@styles/colors';
import { BREAKPOINT_SM } from '@styles/size';

export const AIButtonCaption = styled.p`
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 5px;
  color: ${textColors.subtitle};
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 15px;
  }
`;

export const AIButtonCaptionStrong = styled(AIButtonCaption)`
  font-size: 18px;
  line-height: 19px;
  font-weight: bold;
  color: ${textColors.default};
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 14px;
  }
`;
