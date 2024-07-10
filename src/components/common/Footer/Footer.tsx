import React from 'react';

export interface FooterProps {
  content: string;
}

const footerStyle = {
  padding: '28px 16px 88px',
  width: '100%',
  maxWidth: '100vw',
  backgroundColor: 'rgb(250, 250, 252)',
  textAlign: 'left' as const,
};

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer style={footerStyle}>
      <p>{content}</p>
    </footer>
  );
};

export default Footer;
