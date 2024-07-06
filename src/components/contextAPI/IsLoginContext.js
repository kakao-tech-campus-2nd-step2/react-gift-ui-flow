import { createContext } from 'react'


const token = sessionStorage.getItem('authToken')

export const IsLoginContext = createContext({ isLogin: (token !== null) ? true : false })

