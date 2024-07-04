import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"

interface ProtectedRouteProps {
    children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

    const { authToken } = useAuth()

    if (!authToken) {
        return <Navigate to={"/login"} />
    }

  return children
}

export default ProtectedRoute