import { css } from '@emotion/css';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Image } from '@/components/common/Image';
import AuthContext from '@/context/AuthContext';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const setIsAuthenticated = useContext(AuthContext).setIsAuthenticated;

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        sessionStorage.setItem('authToken', username);
        setIsAuthenticated(true);
        navigate('/');
    };

    return (
        <div className={flexStyle}>
            <Image
                src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
                alt="kakao logo"
            />
            <form className={formStyle} onSubmit={handleSubmit}>
                <div>
                    <UnderlineTextField
                        type="text"
                        id="username"
                        className={setBottomMargin(20)}
                        placeholder="이름"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <UnderlineTextField
                        type="password"
                        id="password"
                        className={setBottomMargin(80)}
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit">로그인</Button>
            </form>
        </div>
    );
}

const flexStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    img {
        width: 100px;
    }
`;
const formStyle = css`
    width: 100%;
    max-width: 580px;
    padding: 60px 20px;
    @media screen and (min-width: 768px) {
        border: 1px solid rgba(0, 0, 0, 0.12);
        padding: 60px 52px;
    }
`;
const setBottomMargin = (margin: number) => css`
    margin-bottom: ${margin}px;
`;
