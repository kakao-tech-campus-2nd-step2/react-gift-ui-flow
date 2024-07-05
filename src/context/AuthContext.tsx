import { createContext } from 'react';

import type { AuthContextProps } from './types';

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
