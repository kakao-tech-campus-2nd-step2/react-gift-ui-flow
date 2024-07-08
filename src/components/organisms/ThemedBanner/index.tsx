import styled from '@emotion/styled';

import { ContainerAlignItemsType, ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';
import type { Theme, ThemeProps } from '@/components/templates/ThemeTemplate';
import { themeMap } from '@/components/templates/ThemeTemplate';

export const ThemedBanner = ({ themeKey }: ThemeProps) => {
  const theme = themeMap.get(themeKey) as Theme;
  const { label, title, description, backgroundColor } = theme;

  return (
    <ThemeHeaderWrapper backgroundColor={backgroundColor}>
      <CenteringContainer
        flexDirection={ContainerDirectionType.column}
        alignItems={ContainerAlignItemsType.start}
        maxWidth="1024px"
      >
        <HookLabel content={label} />
        <HookTitle hContent={title} hNumber={1} />
        <HookDescription content={description} />
      </CenteringContainer>
    </ThemeHeaderWrapper>
  );
};

const ThemeHeaderWrapper = styled.section<Pick<Theme, 'backgroundColor'>>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 50px 20px;
  box-sizing: border-box;
`;

const HookLabel = styled(Paragraph)`
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  line-height: 24px;
`;

const HookTitle = styled(Heading)`
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;
  word-break: break-word;
`;

const HookDescription = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
  padding-top: 12px;
  font-size: 24px;
  line-height: 32px;
`;
