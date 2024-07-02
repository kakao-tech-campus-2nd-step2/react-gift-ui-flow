import styled from '@emotion/styled';
import { textColors } from '@styles/colors';

export const ThemeName = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${textColors.subtitle};
  font-weight: bold;
`;

export const ThemeTitle = styled.h1`
  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;
  color: ${textColors.inset};
  font-weight: bold;
  word-break: break-word;
`;

export const ThemeSubtitle = styled.h3`
  font-size: 24px;
  color: ${textColors.subtitle};
  line-height: 32px;
  padding-top: 12px;
`;
