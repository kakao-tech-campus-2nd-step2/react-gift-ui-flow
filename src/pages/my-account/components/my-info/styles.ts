import styled from '@emotion/styled';
import * as G from '@/styles/GlobalStyles';

export const BoxSpacer = styled(G.Div)`
  width: 100%;
  background-color: inherit;
  height: 64px;
`;

export const LogoutButton = styled.button`
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 40px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  background-color: rgb(68, 68, 68);
`;
