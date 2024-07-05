import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const MyAccount: React.FC = () => {
    const { authToken, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <AccountContainer>
            <WelcomeMessage>{authToken}님 안녕하세요!</WelcomeMessage>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </AccountContainer>
    );
};

export default MyAccount;

const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const WelcomeMessage = styled.h1`
    margin-bottom: 20px;
`;

const LogoutButton = styled.button`
    background-color: #757575;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    border: none;
    cursor: pointer;
`;
