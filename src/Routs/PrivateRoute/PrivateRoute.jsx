import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <span className="loading loading-spinner loading-lg"></span>
    if (!user) return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    return children;
};

export default PrivateRoute;