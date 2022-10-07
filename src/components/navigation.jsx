import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import light_logo from "../logo_2.png"
import dark_logo from "../logo.png"
import NavLinks from "./navlink";
import navData from "../data/navData"
import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = ( props ) => {
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	useEffect(() => {
// 		setCurrentIndex(currentIndex)
// 	}, [currentIndex])
	const { 
		isMobileDevice,
		handleNavMenuToggle,
		isNavMenuToggled,
		isDarkModeToggled,
		handleToggleSwitch
	} = useContext(Context);
	
    return (  
        <>
            <div className="border-b border-gray-200 dark:border-gray-600">
				<nav className="container flex justify-between items-center mx-auto px-4 md:px-0 lg:px-8 py-2">
					<div className="overflow-hidden flex justify-start items-center">
						<img className="w-12 md:w-14 h-auto" src={ isDarkModeToggled ? light_logo : dark_logo } alt="" />
						<div className="hidden lg:flex md:justify-end md:items-center ml-16 lg:ml-16 lg:space-x-7">
							{
								navData.map((nav, index) => {
									return (
										<div key={index}>
											<NavLink to={ nav.link } className="py-2 text-gray-700 hover:text-blue4 dark:hover:text-blue4 dark:md:text-white font-semibold dark:font-medium">
												{ nav.name }
											</NavLink>
										</div>
									)
								})
							}
						</div>
						<div className={`block lg:hidden absolute top-0 left-0
							${ isNavMenuToggled ? "translate-x-0 z-30" : "-translate-x-64"} px-6 pt-14 h-screen
							${ isNavMenuToggled ? "w-[17rem] sm:w-72 bg-gray-700 dark:bg-gray-600 shadow-2xl" : ""} space-y-1
							transition-transform transition-slowest ease-in-out`}>

							<div className="flex justify-start items center mb-10 border-b border-gray-500">
								<img className="relative -top-6 w-12 md:w-14 h-auto" src={ light_logo } alt="" />
								<h1 className="relative -top-4 md:-top-3 left-3 text-3xl text-gray-200 md:text-white font-medium">benj.</h1>
							</div>
							{/* <NavLink
								to="/overview"
								className="block md:hidden py-2 px-4 rounded-lg text-gray-200 dark:text-gray-100 dark:hover:text-white hover:bg-blue4 font-medium"
								onClick={ props.handleNavMenuToggle }
								text="Education">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" 
									className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 16 16">
										<path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 
												1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
										<path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 
												0-.656-.327L8 10.466 4.176 9.032Z"/>
								</svg> Overview
							</NavLink> */}
							<NavLinks
								to="/"
								text="My Profile">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" 
									fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
										<circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
								</svg>
							</NavLinks>
							<NavLink
								to="/education"
								className="block md:hidden py-2 px-4 rounded-lg text-gray-200 dark:text-gray-100 dark:hover:text-white hover:bg-blue4 font-medium"
								onClick={ handleNavMenuToggle }
								text="Education">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" 
									className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 16 16">
										<path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 
												1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
										<path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 
												0-.656-.327L8 10.466 4.176 9.032Z"/>
								</svg> Education
							</NavLink>
							<NavLink
								to="/expertise"
								className="block md:hidden py-2 px-4 rounded-lg text-gray-200 dark:text-gray-100 dark:hover:text-white hover:bg-blue4 font-medium"
								onClick={ handleNavMenuToggle }
								text="Expertise"> 
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
									<polyline points="22 4 12 14.01 9 11.01"></polyline>
								</svg> Expertise
							</NavLink>
							<NavLink
								to="/experience"
								className="block md:hidden py-2 px-4 rounded-lg text-gray-200 dark:text-gray-100 dark:hover:text-white hover:bg-blue4 font-medium" 
								onClick={ handleNavMenuToggle }
								text="Experience">
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/>
								</svg> Experience
							</NavLink>
							<NavLinks 
								to="/projects" 
								text="Projects">
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>
								</svg>
							</NavLinks>
							<NavLinks 
								to="/devtools" 
								text="Dev Tools">
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
								</svg>
							</NavLinks>
							<NavLinks 
								to="/designs"
								text="UI Designs">
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
							</NavLinks>
							<NavLinks 
								to="/about" 
								text="About Me">
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="12" y1="16" x2="12" y2="12"></line>
									<line x1="12" y1="8" x2="12.01" y2="8"></line>
								</svg>
							</NavLinks>
							<NavLinks 
								to="/contact" 
								text="Contact Me">
								<svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2 mb-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 
									2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 
									12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
								</svg>
							</NavLinks>
						</div>
					</div>
					<div className="flex justify-end items-center">
						<div className="flex items-center justify-center mr-4 w-full">
							<label htmlFor="toggle" className="flex items-center cursor-pointer">
								<div className="relative">
									<input type="checkbox" id="toggle" className="sr-only" />
									<div className="block bg-gray-300 dark:bg-gray-500 w-14 h-8 rounded-full" onClick={ handleToggleSwitch }></div>
									{
										!isMobileDevice ?
											<div className="hidden sm:block absolute top-1 -left-24 text-gray-600 dark:text-white font-medium">
												{ isDarkModeToggled ? "Dark Mode" : "Light Mode" }
											</div>
										:
										null
									}
									<div className={`absolute left-1 top-1 ${ isDarkModeToggled ? "translate-x-full" : "" } transition w-6 h-6 p-1.5 rounded-full bg-white`} onClick={ handleToggleSwitch }>
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
						</div>
						<button className="block lg:hidden mr-1 sm:mr-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-300 dark:bg-gray-600" onClick={ handleNavMenuToggle }>
							{ isNavMenuToggled ?
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
								strokeLinecap="round" strokeLinejoin="round">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							:
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-white" viewBox="0 0 24 24" fill="none" 
								stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="3" y1="12" x2="21" y2="12"></line>
									<line x1="3" y1="6" x2="21" y2="6"></line>
									<line x1="3" y1="18" x2="21" y2="18"></line>
								</svg>
							}
						</button>
					</div>
				</nav>
			</div>
			<Outlet />
        </>
    );
}
 
export default Navigation;