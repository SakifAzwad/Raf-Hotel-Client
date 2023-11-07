import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const Root = () => {
    return (
        <div className="font-raleway">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;