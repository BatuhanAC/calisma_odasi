import { useSelector } from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

export default function PrivateRoute({children}) {
  const isLoged = localStorage.getItem('isLoged')
  const location = useLocation()
  

  if(isLoged === "false" || null) {
    return <Navigate to="/login" replace={true} state={{
      return_url: location.pathname
    }} />
  }

  return children
}