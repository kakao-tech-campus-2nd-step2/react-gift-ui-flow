import { ReactNode } from "react"
import { Navigate, Route } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"

interface ProtectedRouteProps {
    path: string;
    children: ReactNode;
}

const ProtectedRoute = ({ path, children }: ProtectedRouteProps) => {

    const { authToken } = useAuth()

  return (
    <Route path={path} element={authToken ? children : <Navigate to={"/login"} />} />
  )
}

export default ProtectedRoute