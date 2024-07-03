import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

export type HeaderProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Header = ({ label, title, description, backgroundColor, ...props }: HeaderProps) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor} {...props}>
      <Nav>
        <TitleLink to="/">{title}</TitleLink>
        <LabelLink to={label}>{description}</LabelLink>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: fixed;
  width: 100%;
  max-width: 1024px;
  height: 59px;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  width: 100%;
`;

const LabelLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: none;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
