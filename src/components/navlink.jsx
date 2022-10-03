import { NavLink } from "react-router-dom";

const NavLinks = ( props ) => {
    return (  
        <NavLink 
            to={ props.to } 
            className="block py-2 px-4 rounded-lg text-gray-200 dark:text-gray-100 dark:hover:text-white hover:bg-blue4 font-medium"
            onClick={ props.handleNavMenuToggle }>
            { props.children }
            <span className="inline-block">{ props.text }</span>
        </NavLink>
    );
}
 
export default NavLinks;