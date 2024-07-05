import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  title: string;
  imageUrl?: string;
  isLoggedIn: boolean;
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
  display: 'flex',
  alignItems: 'center',
};

const rightContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const linkStyle = {
  color: 'purple',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '54px',
  padding: '0 30px',
};

const Header: React.FC<HeaderProps> = ({ title, imageUrl, isLoggedIn }) => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={{ height: '40px' }} />
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div style={rightContainerStyle}>
        {isLoggedIn ? (
          <>
            <Link to="/my-account" style={linkStyle}>
              내 계정
            </Link>
          </>
        ) : (
          <Link to="/login" style={linkStyle}>
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
