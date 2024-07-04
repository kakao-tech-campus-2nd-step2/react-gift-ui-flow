import styled from '@emotion/styled';

import kakaoLogo from '@/assets/login_logo.svg';
import { Button } from '@/components/common/Button/index';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Image } from '@/components/common/Image/index';
import { breakpoints } from '@/styles/variants/index';

const LoginBox = styled.article`
  width: calc(100% - 32px);
  max-width: 548px;
  padding: 16px;

  @media screen and (min-width: ${breakpoints.sm}) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 60px 52px;
    max-width: 474px;
  }
`;

const Input = styled(UnderlineTextField)`
  min-height: 46px;
  font-size: 18px;
  line-height: 25px;
  padding: 10px 0px 8px;
  border-width: 0px 0px 2px;
`;

const KakaoLogo = styled(Image)`
  width: 88px;
`;

const InputMargin = styled.div`
  height: 16px;
  width: 100%;
`;

const KakaoButton = styled(Button)`
  margin-top: 60px;
`;

const KaKaoLoginBox = () => {
  return (
    <>
      <KakaoLogo src={kakaoLogo} alt="login" ratio="square" />
      <LoginBox>
        <Input placeholder="이름" />
        <InputMargin />
        <Input placeholder="비밀번호" />
        <KakaoButton theme="kakao" size="large">
          로그인
        </KakaoButton>
      </LoginBox>
    </>
  );
};

export default KaKaoLoginBox;
