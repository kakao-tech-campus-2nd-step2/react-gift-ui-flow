import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';

const MyAccountPage: React.FC = () => {
  const { authToken, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authToken) {
      history.push('/login'); // 비로그인 상태: 로그인 페이지로 리디렉션
    }
  }, [authToken, history]);

  const handleLogout = () => {
    logout();
    alert('로그아웃 처리');
    history.push('/'); // 메인 페이지로 리디렉션
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
