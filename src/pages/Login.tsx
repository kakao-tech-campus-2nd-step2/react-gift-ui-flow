import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // 임의로 로그인 통과
        login(id);
        setMessage('로그인 성공');
        navigate('/');
    };

    return (
        <LoginContainer>
            <LoginBox onSubmit={handleLogin}>
                <Logo>kakao</Logo>
                <Input 
                    type="text" 
                    placeholder="이름" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                />
                <Input 
                    type="password" 
                    placeholder="비밀번호" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <LoginButton type="submit">로그인</LoginButton>
                {message && <Message>{message}</Message>}
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
`;

const LoginBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`;

const Logo = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const LoginButton = styled.button`
    width: 300px;
    padding: 10px;
    background-color: yellow;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
`;

const Message = styled.p`
    margin-top: 10px;
    color: green;
    font-weight: bold;
`;
