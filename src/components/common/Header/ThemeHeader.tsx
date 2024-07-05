import React from 'react';

const headerStyle: React.CSSProperties = {
  backgroundColor: '#4A4A4A',
  color: '#FFFFFF',
  padding: '20px',
  textAlign: 'left',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px 0',
};

const subtitleContainerStyle: React.CSSProperties = {
  marginTop: '20px', // 위 간격을 20px로 설정
};

const subtitleLineStyle: React.CSSProperties = {
  marginBottom: '10px', // 아래 간격을 10px로 설정
};

const firstLineStyle: React.CSSProperties = {
  fontSize: '18px',
};

const secondLineStyle: React.CSSProperties = {
  fontSize: '14px',
};

interface ThemeHeaderProps {
  title: string;
  subtitle: string[];
}

const ThemeHeader: React.FC<ThemeHeaderProps> = ({ title, subtitle }) => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={subtitleContainerStyle}>
        <div style={{ ...subtitleLineStyle, ...firstLineStyle }}>{subtitle[0]}</div>
        <div style={{ ...subtitleLineStyle, ...secondLineStyle }}>{subtitle[1]}</div>
      </div>
    </header>
  );
};

export default ThemeHeader;
