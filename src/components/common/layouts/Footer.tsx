import styled from '@emotion/styled';
import React from 'react';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => {
  return (
    <FooterWrapper {...props}>
      <p>{children}</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 40px 16px 120px;
  width: 100%;
  max-width: 100vw;
  background-color: rgb(250, 250, 252);
`;
