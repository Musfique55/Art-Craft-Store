import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }else{
        navigate('/login');
    }
};

export default ProtectedRoutes;