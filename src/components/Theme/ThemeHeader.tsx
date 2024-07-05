import './ThemeHeader.css';

import React from 'react';

interface ThemeHeaderProps {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const ThemeHeader: React.FC<ThemeHeaderProps> = ({
  label,
  title,
  description,
  backgroundColor,
}) => {
  return (
    <header className="theme-header" style={{ backgroundColor }}>
      <h3>{label}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default ThemeHeader;
