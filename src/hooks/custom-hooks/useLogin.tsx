import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLoginClick = () => {
    sessionStorage.setItem('authToken', name);
    navigate('/');
  };

  return {
    name,
    handleNameChange,
    handleLoginClick,
  };
};

export default useLogin;
