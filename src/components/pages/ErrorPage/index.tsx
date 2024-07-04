import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Heading } from '@/components/atoms/Heading';
import { Container } from '@/components/molecules/Container';
import { ParagraphHeadingDownBanner } from '@/components/molecules/ParagraphHeadingDownBanner';
import { HeaderFooter } from '@/components/templates/HeaderFooter';

export const ErrorPage = () => {
  return (
    <HeaderFooter>
      <Container flexDirection={ContainerDirectionType.column}>
        <Heading hContent="Oops!" hNumber={1} />
        <ParagraphHeadingDownBanner hContent="404 page not found" pContent="sorry" hNum={1} />
      </Container>
    </HeaderFooter>
  );
};
