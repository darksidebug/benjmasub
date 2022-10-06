/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from "react";
import profile from "../img/benj_profile.jpg"; 
import Button from "../components/button";
import Education from "./education";
import Experience from "./experience";
import Expertise from "./expertise";
import Overview from "./overview";
import buttons from "../data/overview-buttons";
import { Context } from "../context/ContextAPI";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";

const Profile = ( props ) => {
	const [isEducation, setEducation] = useState(false)
	const [isExpertise, setExpertise] = useState(false)
	const [isExperience, setExperience] = useState(false)
	const [isOverview, setOverView] = useState(true)
	const [isProjects, setProjects] = useState(false)
	const [isTools, setTools] = useState(false)
	const [currentIndex, setcurrentIndex] = useState(0)

	const { isMobileDevice } = useContext(Context)

	useEffect(() => {
		setcurrentIndex(currentIndex)
	}, [currentIndex])
	

	const handleEducation = () => {
		if(!isEducation){
			setEducation(!isEducation)
			setExpertise(false)
			setExperience(false)
			setOverView(false)
		}
	}

	const handleExpertise = () => {
		if(!isExpertise){
			setExpertise(!isExpertise)
			setEducation(false)
			setExperience(false)
			setOverView(false)
		}
	}

	const handleExperience = () => {
		if(!isExperience){
			setExperience(!isExperience)
			setEducation(false)
			setExpertise(false)
			setOverView(false)
		}
	}

	const handleOverview = () => {
		if(!isOverview){
			setOverView(!isOverview)
			setExperience(false)
			setEducation(false)
			setExpertise(false)
		}
	}

	const eventSelect = (index) => {
		if(index === 0) return handleOverview();
		else if(index === 1) return handleEducation();
		else if(index === 2) return handleExpertise();
		else if(index === 3) return handleExperience();
		else if(index === 4) return null;
		else if(index === 5) return null;
		setcurrentIndex(index)
	}

	return (  
		<motion.div 
			className={`container mx-auto ${ !isMobileDevice ? 'mt-18' : 'mt-0 mb-10'} px-4 md:px-0 lg:px-8`}
			initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
			<div className={`block md:flex md:justify-between ${ !isMobileDevice ? 'mt-8 sm:mt-2 md:mt-8' : 'mt-0'}`}>
				<div className="py-4 w-12/12 md:w-4/12">
					<div className="block sm:flex sm:justify-between md:block">
						{
							!isMobileDevice && 
							<div className="w-12/12 sm:w-5/12 md:w-full">
								<div className={`flex justify-center items-center ${!isMobileDevice && 'mt-12'}`}>
									<div className="p-1.5 border-4 border-blue4 rounded-full dark:bg-gray-700">
										<div className="overflow-hidden h-40 w-40 rounded-full">
											<img className="w-full" src={ profile } alt="Profile-Image" />
										</div>
									</div>
								</div>
							</div>
						}
						
						<div className="w-12/12 sm:w-7/12 md:w-full">
							<div className={`flex justify-center items-center ${ !isMobileDevice ? 'mt-10 sm:mt-10 md:mt-10' : 'mt-2'}`}>
								<h2 className="uppercase md:normal-case text-gray-600 dark:text-white text-xl sm:text-2xl md:text-xl font-black dark:md:font-semibold tracking-[0.03rem]">Benigno E. Ambus Jr.</h2>
							</div>
							<div className="flex justify-center items-center mt-1">
								<h2 className="text-blue4 text-sm font-medium tracking-[0.03rem]">TG: @darksidebug</h2>
							</div>
							<div className="flex justify-center items-center mt-6">
								<h2 className="text-gray-600 dark:text-gray-300 text-md md:text-sm font-medium tracking-[0.03rem]">Software Developer</h2>
							</div>
							<div className="flex justify-center items-center mt-1">
								<h2 className="text-gray-600 dark:text-gray-300 text-md md:text-sm font-medium tracking-[0.03rem]">UI/UX Designer</h2>
							</div>
							<div className="flex justify-center items-center mt-5 space-x-2">
								<div className="py-2 px-2.5 dark:px-3 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
											hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
									<i className="fa-solid fa-envelope"></i>
								</div>
								<div className="py-2 px-3.5 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
											hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
									<i className="fa-brands fa-linkedin-in"></i>
								</div>
								<div className="py-2 px-3.5 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
											hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
									<i className="fa-brands fa-facebook-f"></i>
								</div>
								<div className="py-2 px-3 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
											hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
									<i className="fa-brands fa-github"></i>
								</div>
							</div>
							<div className="flex justify-center items-center mt-3 sm:mt-6">
								<div className="flex justify-start items-center space-x-1">
									<NavLink to="/resume" className="inline-block py-2.5 px-6 rounded-md border border-blue4 text-white font-semibold bg-blue4">
										<span>Preview Resume</span>
									</NavLink>
									<a href="/Updated_Resume.pdf" filename="Updated_Resume.pdf" download="Updated_Resume.pdf" className="inline-block py-3 px-4 rounded-md border border-blue4 text-gray-600 dark:text-white font-semibold">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
											strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					{
						isMobileDevice && <div className="flex md:hidden justify-center items-center mt-4">
							<NavLink to="/overview" className="block md:hidden text-sm text-blue4 text-sm font-medium tracking-[0.03rem]">See profile overview</NavLink>
						</div>
					}
					<div className="mt-6 sm:mt-10 md:mt-16 px-8 md:pl-10 md:pr-8">
						<h4 className="text-gray-600 dark:text-gray-300 text-sm font-medium tracking-[0.03rem]">Recent Job:</h4>
						<div className="mt-4 mb-2 md:mb-0 p-2 px-4 rounded border border-gray-300 dark:border-gray-500">
							<h4 className="text-gray-500 text-lg dark:text-white font-semibold dark:font-medium tracking-[0.03rem]">Front-End Developer (Remote)</h4>
							<h4 className="text-gray-400 text-sm font-medium tracking-[0.03rem]">Laravel + Vuejs Developer</h4>
							<h4 className="text-gray-400 text-sm font-medium tracking-[0.03rem]">RagingRiver ICT Corporation</h4>
						</div>
						<NavLink to="/experience" className="block md:hidden text-sm text-blue4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">See all job experience</NavLink>
					</div>
					{/* <div className="mt-8 pl-10">
						<h4 className="text-gray-600 dark:text-gray-300 text-sm font-medium tracking-[0.03rem]">Certificates:</h4>
					</div> */}
				</div>
				<div className="py-4 w-12/12 md:w-8/12">
					<div className="md:px-6">
						<div className="hidden md:flex justify-start items-center space-x-2 ml-8">
							{
								buttons.map((btn, index) => {
									return (
										<Button onClick={() => {
											eventSelect(index)
											setcurrentIndex(index)
										}} selected={currentIndex === index ? true : false} key={`nbt_${index}`}>
											{
												btn.text != "" 
													? <span>{ btn.text }</span>
													: <>
														<span className="hidden lg:block">{ btn.hidden }</span> 
														<span className="block lg:hidden">{ btn.block }</span>
													</>
											}
										</Button>
									)
								})
							}
						</div>
						{ !isMobileDevice && isOverview && 
							<Overview
								handleEventSelect  = { eventSelect }
								handleCurrentIndex = { setcurrentIndex }
							/> 
						}
						{ isEducation && <Education /> }
						{ isExpertise && <Expertise /> }
						{ isExperience && <Experience /> }
						
					</div>
				</div>
				<Outlet />
			</div>
		</motion.div>
    );
}
 
export default Profile;