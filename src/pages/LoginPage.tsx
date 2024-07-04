import { Image } from '@/components/common/Image';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { BodyWrapper } from './MainPage';
import { Button } from '@/components/common/Button';
import styled from '@emotion/styled';

const BodyPlusWrapper = styled(BodyWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* 화면의 전체 높이를 차지하도록 설정 */
  padding: 0 20px; /* 좌우 패딩을 설정하여 여백 추가 */
  gap: 20px;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 50px;
  gap: 40px;

  @media (min-width: 768px) {
    border: 1px solid lightgray;
  }
`;

const LoginPage = () => {
  return (
    <BodyPlusWrapper>
      <Image src="/images/kakao_logo.svg" width={100} height={100}></Image>
      <Border>
        <UnderlineTextField placeholder="이름" />
        <UnderlineTextField placeholder="비밀번호" />
        <Button theme="kakao" size="large">
          로그인
        </Button>
      </Border>
    </BodyPlusWrapper>
  );
};

export default LoginPage;
