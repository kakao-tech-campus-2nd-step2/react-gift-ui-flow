import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
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
