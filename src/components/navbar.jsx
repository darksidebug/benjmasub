import Navigation from "./navigation";
import ProfileNavigation from "./profile-navigation";

const Navbar = ( props ) => {
    return ( 
        <> 
        {
            !props.isMobileDevice ? 
                <Navigation 
                    handleToggleSwitch  = { props.handleToggleSwitch } 
                    handleNavMenuToggle = { props.handleNavMenuToggle } 
                    isDarkModeToggled	= { props.isDarkModeToggled } 
                    isNavMenuToggled	= { props.isNavMenuToggled } 
                    isMobileDevice		= { props.isMobileDevice }
                />
            :
                <ProfileNavigation 
                    handleToggleSwitch = { props.handleToggleSwitch } 
                    isDarkModeToggled  = { props.isDarkModeToggled } 
                    isMobile	       = { props.isMobileDevice }
                />
        }
        </>
    );
}
 
export default Navbar;