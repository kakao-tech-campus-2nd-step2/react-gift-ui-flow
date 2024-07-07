import { useContext } from 'react';

import { IsLoginContext } from './IsLoginContext';

export function useIsLoginState() {
  const context = useContext(IsLoginContext);

  if (!context) {
    throw new Error('로그인 정보를 찾을수 없습니다.');
  }

  return context.isLogin;
}
