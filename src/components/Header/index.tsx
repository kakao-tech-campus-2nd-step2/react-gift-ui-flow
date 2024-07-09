import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useContext } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AuthContext from '@/context/AuthContext';

import { Image } from '../common/Image';

export default () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className={headerStyle}>
                <FlexContainer>
                    <Image
                        alt={'카카오 선물하기 로그인'}
                        src={'https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png'}
                        height={'54px'}
                        onClick={() => navigate('/')}
                    />
                    <UserButton navigate={navigate} />
                </FlexContainer>
            </header>
            <div
                className={css`
                    height: 54px;
                `}
            ></div>
        </div>
    );
};

const headerStyle = css`
    position: fixed;
    width: 100%;
    background-color: #ffffff;
`;
const FlexContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
});

const UserButton = ({ navigate }: { navigate: NavigateFunction }) => {
    const isAuthenticated = useContext(AuthContext).isAuthenticated;

    return (
        <div>
            {isAuthenticated ? (
                <button onClick={() => navigate('/my-account')}>내 계정</button>
            ) : (
                <button onClick={() => navigate('/login')}>로그인</button>
            )}
        </div>
    );
};
