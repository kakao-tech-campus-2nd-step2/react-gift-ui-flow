import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { useAuth } from '@/context/useAuth';

const MyAccountPage: React.FC = () => {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login'); // 비로그인 상태: 로그인 페이지로 리디렉션
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    logout();
    alert('로그아웃 처리');
    navigate('/'); // 메인 페이지로 리디렉션
  };

  return (
    <div>
      <Button onClick={handleLogout} theme="outline" size="responsive">
        로그아웃
      </Button>
    </div>
  );
};

export default MyAccountPage;
