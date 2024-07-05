import { createContext } from 'react';

import type { AuthContextProps } from '@/context/types';

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
