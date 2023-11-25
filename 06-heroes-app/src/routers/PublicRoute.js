import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthContext"



export const PublicRoute = ({children}) => {

    // console.log(children);

    const {user} = useContext(AuthContext);
    // console.log(user);


  return (!user.logged)
            ? children
            : <Navigate to="/*"/>
  
}
