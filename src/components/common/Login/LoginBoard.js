import './LoginBoard.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index.tsx';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField.tsx';

export default function LoginBoard() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (id && password) {
      sessionStorage.setItem('authToken', id);
      navigate(-1);
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <div className="loginBoard-container">
      <div className="loginBoard__name">
        <UnderlineTextField
          placeholder="이름"
          disabled={false}
          invalid={false}
          size="small"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="loginBoard__pw">
        <UnderlineTextField
          placeholder="비밀번호"
          disabled={false}
          invalid={false}
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="loginBoard__btn">
        <Button theme="kakao" size="small" onClick={handleLogin}>
          로그인
        </Button>
      </div>
    </div>
  );
}
