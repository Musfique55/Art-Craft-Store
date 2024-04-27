import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="nunito">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;