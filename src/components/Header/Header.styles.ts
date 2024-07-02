import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  background-color: #fff;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 auto; */
  padding: 10px 20px;
  /* max-width: 1200px; */
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const Login = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
