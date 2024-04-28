import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const location = useLocation();
    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

ProtectedRoutes.propTypes = {
    children : PropTypes.node
}
export default ProtectedRoutes;