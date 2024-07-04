import { createContext, useState } from 'react';

type UserInfoProps = {
  userName: string;
  setUserName: (user: string) => void;
};
const defaultUserInfo: UserInfoProps = {
  userName: '',
  setUserName: () => {},
};

export const UserInfo = createContext<UserInfoProps>(defaultUserInfo);

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<string>(defaultUserInfo.userName);
  return <UserInfo.Provider value={{ userName, setUserName }}>{children}</UserInfo.Provider>;
};
