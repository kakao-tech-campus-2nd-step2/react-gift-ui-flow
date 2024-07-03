import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Image } from '../common/Image';

export default () => {
    return (
        <header
            className={css`
                position: fiexd;
            `}
        >
            <FlexContainer>
                <Image
                    alt={'카카오 선물하기 로그인'}
                    src={'https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png'}
                    height={'54px'}
                />
                <UserButton />
            </FlexContainer>
        </header>
    );
};

const FlexContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px',
});
const UserButton = () => {
    const [isLogined, setIsLogined] = useState<boolean>(false);
    useEffect(() => {
        setIsLogined(sessionStorage.getItem('user') ? true : false);
    }, []);

    return (
        // TODO 마이페이지 또는 로그인페이지로
        <div>{isLogined ? <button>내 계정</button> : <button>로그인</button>}</div>
    );
};
