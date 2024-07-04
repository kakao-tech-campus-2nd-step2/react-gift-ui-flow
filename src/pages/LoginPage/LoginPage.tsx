import styled from '@emotion/styled';
import Login from '@/pages/LoginPage/section/Login';

const LoginPage = () => {
    return (
        <Wrapper>
            <LoginTitle src='https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg' alt='kakao' />
            <Login />
        </Wrapper>
    )
}

export default LoginPage;

const LoginTitle = styled.img({
    width: '88px'
})

const Wrapper = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
})