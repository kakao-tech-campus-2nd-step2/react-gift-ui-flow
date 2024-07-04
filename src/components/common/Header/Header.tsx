import React from 'react';

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
};

const titleStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Header: React.FC<HeaderProps> = ({ title, imageUrl }) => {
  return (
    <header style={headerStyle}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} style={{ height: '40px', paddingLeft: '20px' }} />
      ) : (
        <h1 style={titleStyle}>{title}</h1>
      )}
    </header>
  );
};

export default Header;
