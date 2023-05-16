import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();


    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <p>Loading ....</p>
    }
    if(user?.email){
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    );
};

export default PrivateRoute;