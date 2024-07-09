import { css } from '@emotion/css';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import Header from '@/components/Header';
import AuthContext from '@/context/AuthContext';

export default () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [navigate, isAuthenticated]);

    const username = sessionStorage.getItem('authToken');
    const logout = () => {
        sessionStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/');
    };
    return (
        <div>
            <Header />
            <div className={flexStyle}>
                <h2>{username}님 안녕하세요!</h2>
                <Button theme="darkGray" size="small" onClick={logout}>
                    로그아웃
                </Button>
            </div>
        </div>
    );
};

const flexStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0px 120px;
    gap: 80px;
    button {
        max-width: 200px;
    }
    h2 {
        font-size: 36px;
        font-weight: bold;
    }
`;
