import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
    const [isLogined, setIsLogined] = useState<boolean>(false);
    useEffect(() => {
        setIsLogined(sessionStorage.getItem('authToken') ? true : false);
    }, []);

    return (
        // TODO 마이페이지 또는 로그인페이지로
        <div>
            {isLogined ? (
                <button onClick={() => navigate('/my-account')}>내 계정</button>
            ) : (
                <button onClick={() => navigate('/login')}>로그인</button>
            )}
        </div>
    );
};
