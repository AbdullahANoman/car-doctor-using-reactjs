import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <p>Loading ....</p>
    }
    if(user.email){
        return children;
    }
    return (
        <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivateRoute;