import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
    const history = useHistory();
    const [btnLabel, setBtnLabel] = useState<string>('로그인')

    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('authToken');
        if (authTokenFromSession) {
            setBtnLabel('내 계정')
        } else {
            setBtnLabel('로그인')
        }
    }, []);

    const onBtnClickedHandler = () => {
        if (btnLabel === '로그인') {
            history.push('/login')
        } else {
            history.push('/my-account')
        }
    }

    return (
        <Wrapper>
            <InsideWrapper>
                <Inner>
                    <Title onClick={() => { history.push('/') }}>선물하기</Title>
                    <LoginBtn onClick={onBtnClickedHandler}>{btnLabel}</LoginBtn>
                </Inner>
            </InsideWrapper>
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

const Inner = styled.div({
    width: '100%',
    maxWidth: '1024px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const InsideWrapper = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Wrapper = styled.header(
    {
        width: '100%',
        height: '55px',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        padding: '0 16px',
        boxSizing: 'border-box',
        maxWidth: '100vw',
        position: 'fixed',
        zIndex: '9999',
        alignContent: 'center'
    },
);