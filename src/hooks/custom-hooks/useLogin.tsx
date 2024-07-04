import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLoginClick = () => {
    if (name.length === 0) {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      sessionStorage.setItem('authToken', name);
      navigate('/');
    }
  };

  return {
    name,
    handleNameChange,
    handleLoginClick,
  };
};

export default useLogin;
