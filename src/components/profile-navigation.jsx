/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import bgImg from "../img/bg.jpg";
import profile from "../img/benj_profile.jpg"; 
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion"

const ProfileNavigation = ( props ) => {
    const { 
        isMobileDevice,
        handleToggleSwitch, 
        isDarkModeToggled
    } = useContext(Context);
    return (  
        <motion.div 
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit    = {{ opacity: 0 }}>
            <div className="overflow-hidden flex justify-center h-32 border-b border-gray-300">
                <div className="h-32">
                    <img src={ bgImg } alt="Background-Image" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className={`relative -top-20 z-30 p-1.5 border-4 border-blue4 rounded-full ${ isMobileDevice ? 'bg-white' : ''} dark:bg-gray-700 dark:shadow-xl`}>
                    <div className={`overflow-hidden h-36 w-36 ${ isMobileDevice ? 'border border-gray-300' : ''} rounded-full`}>
                        <img className="w-full" src={ profile } alt="Profile-Image" />
                    </div>
                </div>
                <div className="absolute z-20">
                    <NavLink
                        to="/projects"
                        className="absolute -left-[9.3rem] top-6 z-30 px-[0.3rem] py-[0.73rem] h-12 w-12 border border-gray-300 dark:border-gray-700 rounded-full dark:shadow-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/devtools"
                        className="absolute -left-[6.5rem] top-[5.5rem] z-30 px-1.5 py-3 h-12 w-12 border border-gray-300 dark:border-gray-700 rounded-full dark:shadow-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="absolute -left-6 top-[6.7rem] z-30 px-[0.3rem] py-3 h-12 w-12 border border-gray-300 dark:border-gray-700 rounded-full dark:shadow-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="absolute -right-[6.5rem] top-[5.5rem] z-30 px-1.5 py-3 h-12 w-12 border border-gray-300 dark:border-gray-700 rounded-full dark:shadow-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 
                            2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 
                            12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/designs"
                        className="absolute -right-[9.3rem] top-6 z-30 px-1.5 py-2.5 h-12 w-12 border border-gray-300 dark:border-gray-700 rounded-full dark:shadow-lg bg-white dark:bg-gray-600 text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3"  viewBox="0 0 384 512"
                        fill="currentColor" stroke="currentColor">
                            <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 
                            369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 
                            193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 
                            351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 
                            468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 
                            353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 
                            57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 
                            191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 
                            320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 
                            320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 
                            309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 
                            351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 
                            416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 
                            415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 
                            131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 
                            160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 
                            31.3778H207.666V160.207Z"/>
                        </svg>
                    </NavLink>
                </div>
            </div>
            <div className="fixed left-0 -bottom-0.5 z-30 py-4 w-full border-t dark:border-gray-700 rounded-tl-2xl rounded-tr-2xl bg-white dark:bg-gray-600 shadow-xl">
                <div className="flex justify-around items-center">
                    <NavLink
                        to="/"
                        className="text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                                <circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/education"
                        className="text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" 
                            className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 
                                        1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 
                                        0-.656-.327L8 10.466 4.176 9.032Z"/>
                        </svg>
                    </NavLink>
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" />
                            <div className="block bg-gray-300 dark:bg-gray-500 w-14 h-8 rounded-full" onClick={ handleToggleSwitch }></div>
                            <div className="hidden sm:block absolute top-1 -left-24 text-gray-600 dark:text-white font-medium">{ isDarkModeToggled ? "Dark Mode" : "Light Mode" }</div>
                            <div className={`absolute left-1 top-1 ${ isDarkModeToggled ? "translate-x-full" : "" } transition w-6 h-6 p-1.5 rounded-full bg-white`} onClick={ props.handleToggleSwitch }>
                                {
                                    isDarkModeToggled ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" 
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    :
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                                        strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="5"/>
                                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                                        </svg>
                                }
                            </div>
                        </div>
                    </label>
                    <NavLink
                        to="/expertise"
                        className="text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className="text-gray-500 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/>
                        </svg>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </motion.div>
    );
}
 
export default ProfileNavigation;