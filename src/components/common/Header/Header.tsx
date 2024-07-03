import styled from '@emotion/styled';

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Title>선물하기</Title>
            <LoginBtn>로그인</LoginBtn>
        </Wrapper>
    )
};

const Title = styled.span(
    {
        cursor: 'pointer',
        fontSize: '17px',
        fontWeight: '700',
    }
);

const LoginBtn = styled.span(
    {
        cursor: 'pointer',
        fontSize: '15px',
    }
);

const Wrapper = styled.div(
    {
        width: '100%',
        height: '55px',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '0 16px',
        boxSizing: 'border-box',
        maxWidth: '1024px',
        margin: '0 auto',
    },
);