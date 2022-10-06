import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import Navigation from "./navigation";
import ProfileNavigation from "./profile-navigation";

const Navbar = ( props ) => {
    const { isMobileDevice } = useContext(Context);
    return ( 
        <> 
        {
            !isMobileDevice ? 
                <Navigation />
            :
                <ProfileNavigation />
        }
        </>
    );
}
 
export default Navbar;