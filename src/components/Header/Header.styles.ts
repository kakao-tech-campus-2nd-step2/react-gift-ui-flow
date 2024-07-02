import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 61px;
  }
`;

export const Login = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
