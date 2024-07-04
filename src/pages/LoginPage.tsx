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
  padding-left: 20%;
  padding-right: 20%;
  gap: 20px;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid lightgray; /* 예시를 위한 테두리 */
  padding: 50px;
  gap: 40px;
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
