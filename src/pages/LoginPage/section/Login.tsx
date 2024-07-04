import styled from '@emotion/styled';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Button } from '@/components/common/Button';

const Login = () => {
    return (
        <LoginBox>
            <UnderlineTextField placeholder='이름' size={'small'} />
            <div style={{ height: "16px" }} />
            <UnderlineTextField type='password' placeholder='비밀번호' />
            <div style={{ height: "60px" }} />
            <Button children='로그인' />
        </LoginBox>
    )
}

export default Login;

const LoginBox = styled.article({
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '60px 52px',
    width: '100%',
    maxWidth: '475px'
})