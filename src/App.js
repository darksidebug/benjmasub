import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Profile from "./routes/profile";
import Projects from "./routes/projects";
import CurriculumVitae from "./routes/resume";
import Education from "./routes/education";
import Expertise from "./routes/expertise";
import Experience from "./routes/experience";
import Contact from "./routes/contact";
import Tools from "./routes/devtools";
import About from "./routes/about";
import Overview from "./routes/overview";
import UIDesigns from "./routes/designs";
import { Context } from "./context/ContextAPI";

const App = () => {
	const [isDarkModeToggled, setDarkMode] 		   = useState(false);
	const [isNavMenuToggled, setNavMenuToggleMode] = useState(false);
	const [isMobileDevice, setMobileDeviceMode]    = useState(false);

	useEffect(() => {	
		handleDeviceDetection();
		handleTheme();
	})
	

	const handleToggleSwitch = () => {
		setDarkMode(!isDarkModeToggled);

		if(isDarkModeToggled === false){
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			return;
		}

		localStorage.theme = "light";
		document.documentElement.classList.remove('dark')
	}

	const handleNavMenuToggle = () => {
		setNavMenuToggleMode(!isNavMenuToggled)
	}

	const handleTheme = () => {
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			setDarkMode(true);
			return;
		}

		document.documentElement.classList.remove("dark")
		localStorage.theme = "light";
		setDarkMode(false);
	}

	const handleDeviceDetection = () => {
		const ua = navigator.userAgent;
		if ((/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) && 
			window.matchMedia('(max-width: 700px)').matches) {
			setMobileDeviceMode(true);
			return;
		}

		setMobileDeviceMode(false);
	};

	return (
		<Context.Provider value={
			{
				isMobileDevice,
				handleToggleSwitch,
				handleNavMenuToggle,
				isDarkModeToggled,
				isNavMenuToggled,
				isDarkModeToggled
			}
		}>
			<div className="overflow-hidden">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route index element = { <Profile /> } />
						{
							isMobileDevice && (
							<>
								<Route path="overview"   element = { <Overview /> } />
								<Route path="education"  element = { <Education /> } />
								<Route path="expertise"  element = { <Expertise /> } />
								<Route path="experience" element = { <Experience /> } />
							</>
							)
						}
						<Route path="projects" element = { <Projects /> } />
						<Route path="designs"  element = { <UIDesigns /> } />
						<Route path="devtools" element = { <Tools /> } />
						<Route path="about"    element = { <About /> } />
						<Route path="contact"  element = { <Contact /> } />
						<Route path="resume"   element = { <CurriculumVitae /> } />
					</Routes>
				</BrowserRouter>
			</div>
		</Context.Provider>
	);
}
 
export default App;