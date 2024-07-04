import { useParams } from 'react-router-dom';
import GiftThemes from '@constants/GiftThemes';
import Page from '@components/templates/Page';
import Banner from '@components/organisms/banner/Banner';
import GiftDisplaySection from '@components/organisms/gift/GiftDisplaySection';
import useFetchGifts from '@hooks/useFetchGifts';
import Container from '@components/atoms/container/Container';
import { MAX_CONTENT_WIDTH } from '@styles/size';

function ThemePage() {
  const { themeKey } = useParams();
  const gifts = useFetchGifts({ themeFilter: themeKey });

  if (!themeKey || !(themeKey in GiftThemes)) {
    return (
      <div>
        테마 지정 오류!
      </div>
    );
  }

  return (
    <Page>
      <Banner themeKey={themeKey} />
      <Container elementSize="full-width" justifyContent="center">
        <Container
          elementSize="full-width"
          maxWidth={MAX_CONTENT_WIDTH}
          justifyContent="center"
          padding="40px 16px 300px"
        >
          <GiftDisplaySection gifts={gifts} maxColumns={4} minColumns={2} />
        </Container>
      </Container>
    </Page>
  );
}

export default ThemePage;
