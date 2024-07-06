import Container from '@components/atoms/container/Container';
import { MAX_CONTENT_WIDTH } from '@styles/size';
import { buttonColors } from '@styles/colors';
import {
  AIButtonCaption, AIButtonCaptionStrong,
} from '@components/organisms/main/AIButtonSection.styles';

function AIButtonSection() {
  return (
    <Container elementSize="full-width" justifyContent="center">
      <Container
        elementSize="full-width"
        maxWidth={MAX_CONTENT_WIDTH}
        padding="16px"
      >
        <Container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          backgroundColor={buttonColors.kakao} // 나중에 컬러 팔레트를 새로 만들던가 해야겠다..
          elementSize={{
            width: '100%',
            height: '76px',
          }}
          cssProps={{
            borderRadius: '8px',
          }}
        >
          <AIButtonCaption>AI가 추천하는 선물</AIButtonCaption>
          <AIButtonCaptionStrong>선물을 추천받고 싶은 친구를 선택해주세요.</AIButtonCaptionStrong>
        </Container>

      </Container>
    </Container>
  );
}

export default AIButtonSection;
