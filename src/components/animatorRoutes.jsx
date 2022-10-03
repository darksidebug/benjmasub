import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "../routes/profile";
import Projects from "../routes/projects";
import CurriculumVitae from "../routes/vitae";
import Education from "../routes/education";
import Expertise from "../routes/expertise";
import Experience from "../routes/experience";
import Contact from "../routes/contact";
import Tools from "../routes/devtools";
import About from "../routes/about";
import { AnimatePresence } from "framer-motion";

const AnimatorRoutes = ( props ) => {
    const location = useLocation();
    return (  
        <AnimatePresence>
            <Routes location = { location } key  = { location.pathname }>
                <Route index             element = { <Profile         isMobile = { props.isMobileDevice } /> } />
                <Route path="projects"   element = { <Projects        isMobile = { props.isMobileDevice } isDarkModeToggled = { props.isDarkModeToggled } /> } />
                <Route path="education"  element = { <Education       isMobile = { props.isMobileDevice } /> } />
                <Route path="expertise"  element = { <Expertise       isMobile = { props.isMobileDevice } /> } />
                <Route path="experience" element = { <Experience      isMobile = { props.isMobileDevice } /> } />
                <Route path="devtools"   element = { <Tools           isMobile = { props.isMobileDevice } /> } />
                <Route path="about"      element = { <About           isMobile = { props.isMobileDevice } /> } />
                <Route path="contact"    element = { <Contact         isMobile = { props.isMobileDevice } /> } />
                <Route path="vitae"      element = { <CurriculumVitae isMobile = { props.isMobileDevice } /> } />
            </Routes>
        </AnimatePresence>
    );
}
 
export default AnimatorRoutes;