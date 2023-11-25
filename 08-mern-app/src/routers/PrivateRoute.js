
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({children, isAuthenticated}) => {


  // const path = useLocation();
  // console.log(path.pathname);
  // localStorage.setItem('lastPath', path.pathname);


  return ( isAuthenticated ) 
            ? children
            : <Navigate to="/login" />
    
}






