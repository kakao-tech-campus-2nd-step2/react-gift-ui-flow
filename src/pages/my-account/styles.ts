import * as Global from '@/styles/GlobalStyles';
import styled from '@emotion/styled';

export const MyAccountPageLayout = styled(Global.Div)`
  width: 100%;
  padding: 80px 0px 120px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 700;
  font-size: 36px;
`;

export const BoxSpacer = styled(Global.Div)`
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
