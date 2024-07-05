import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface HeaderProps {
  title: string;
  imageUrl?: string;
}

const headerStyle = {
  position: 'fixed' as const,
  zIndex: 9999,
  width: '100%',
  maxWidth: '100vw',
  height: '54px',
  backgroundColor: 'rgb(255, 255, 255)',
  padding: '0px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const titleStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const loginButtonStyle = {
  marginRight: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
};

const Header: React.FC<HeaderProps> = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header style={headerStyle}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} style={{ height: '40px', paddingLeft: '20px' }} />
      ) : (
        <h1 style={titleStyle}>{title}</h1>
      )}
      <button style={loginButtonStyle} onClick={handleLoginClick}>
        로그인
      </button>
    </header>
  );
};

export default Header;
