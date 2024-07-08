import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Heading } from '@/components/atoms/Heading';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';
import { ParagraphHeadingDownBanner } from '@/components/molecules/ParagraphHeadingDownBanner';
import { HeaderFooter } from '@/components/templates/HeaderFooter';

export const ErrorPage = () => {
  return (
    <HeaderFooter>
      <CenteringContainer flexDirection={ContainerDirectionType.column}>
        <Heading hContent="Oops!" hNumber={1} />
        <ParagraphHeadingDownBanner hContent="404 page not found" pContent="sorry" hNum={1} />
      </CenteringContainer>
    </HeaderFooter>
  );
};
