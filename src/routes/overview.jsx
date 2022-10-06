import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { motion } from "framer-motion"
import ProjectsList from "../data/overview-project";
import ExpertiseList from "../data/overview-expertise";
import { Outlet, NavLink } from "react-router-dom";

const Overview = (props) => {
    const { isMobileDevice } = useContext(Context);
    return (
        <motion.div 
            className={ isMobileDevice ? 'pl-0 pb-10' : 'px-4 md:pl-8'}
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit    = {{ opacity: 0 }}>
            <div className={`block md:hidden ${isMobileDevice ? 'mt-4' : 'mt-0'} mx-4 pb-5 px-1 border-b border-gray-200 dark:border-gray-600`}>
                <h1 className="w-72 sm:w-full text-[1.5rem] md:text-xl text-gray-600 dark:text-blue4 font-bold sm:font-semibold">{isMobileDevice && 'Profile '}Overview</h1>
            </div>
            <div className="flex justify-between items center mt-10 px-4 sm:px-0">
                <h1 className="ml-4 sm:ml-4 md:ml-0 text-[1.3rem] md:text-xl font-bold dark:md:font-semibold text-gray-700 dark:text-white">Projects Developed</h1>
                <NavLink to="/projects" className="h-8 sm:h-auto w-20 sm:w-auto py-1.5 md:py-1 px-2.5 sm:px-2 mr-4 sm:mr-4 md:mr-0 rounded text-sm border dark:border-0 border-gray-300 hover:border-blue4 dark:bg-gray-600 text-gray-600 hover:text-blue4 dark:text-white dark:hover:text-blue4 dark:text-white font-semibold dark:font-normal">
                    View All
                </NavLink>
                <Outlet/>
                {/* <a href="#" className="py-1 px-2 rounded text-sm border dark:border-0 border-gray-300 hover:border-blue4 dark:bg-gray-600 text-gray-600 hover:text-blue4 dark:text-white dark:hover:text-blue4 dark:text-white font-semibold dark:font-normal">View All</a> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 mb-12 px-8 sm:px-4 md:px-0">
            {
                ProjectsList.map(
                    (project, index) => {
                        return (
                            <div className="overflow-hidden border dark:border-2 dark:border-gray-600 rounded-xl" key={ `avn_${index}` }>
                                <div className="group">
                                    <div className="overflow-hidden relative h-36 sm:h-20 border dark:border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100">
                                        <img width="500" src={ project.img } alt="Project Image" />
                                    </div>
                                </div>
                                <div className="overflow-hidden px-2 py-1 bg-gray-100 dark:bg-gray-600">
                                    <h3 className="text-[0.9rem] font-medium text-gray-600 dark:text-gray-100 truncate">{ project.name }</h3>
                                </div>
                            </div>
                        )
                    }
                )
            }
            </div>
            <div className="mt-12 mb-12 mx-8 sm:mx-4 md:mx-0">
                <h1 className="text-[1.3rem] md:text-xl font-bold dark:md:font-semibold text-gray-700 dark:text-white">Highest Education Attained</h1>
                <div className="mt-6 mb-3 px-2 sm:px-5 md:px-6 py-3 border dark:border-l-[6px] border-gray-300 dark:border-blue4 dark:border-t dark:border-r dark:border-b rounded bg-white dark:bg-gray-700">
                    <div className="space-y-1">
                        <h1 className="pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white tracking-[0.03rem]">
                                Bachelor's Degree
                        </h1>
                        <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">BS Information Technology Major in Networking</h3>
                        <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Southern Leyte State University</h3>
                        <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">October 2015 - January 2020</h3>
                    </div>
                </div>
                {
                    !isMobileDevice ? <button onClick={() => { 
                        props.handleEventSelect(1) 
                        props.handleCurrentIndex(1)
                    }} className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">See educational history</button>
                    : <NavLink to="/education" className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">
                        See educational history
                    </NavLink>
                }
            </div>
            <div className="mt-6 mb-12 mx-8 sm:mx-4 md:mx-0">
                <h1 className="text-[1.3rem] md:text-xl font-bold dark:md:font-semibold text-gray-700 dark:text-white">Knowledge and Expertise</h1>
                <div className="mt-6 mb-3 px-0 sm:px-3 md:px-3 py-3 border dark:border-l-[6px] border-gray-300 dark:border-blue4 dark:border-t dark:border-r dark:border-b rounded bg-white dark:bg-gray-700">
                {
                    ExpertiseList.map((expertise, index) => {
                        return(
                            <div className="relative px-2 md:px-3 mb-4 last:mb-0" key={ index }>
                                <div className="space-y-1">
                                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white tracking-[0.03rem]">
                                            { expertise.name }
                                    </h1>
                                    <div className="pl-8 md:pl-4">
                                        {
                                            expertise.tech.map(
                                                (tech, i) => {
                                                    return(
                                                        <div key={ i }>
                                                            <h3 className="relative z-10 pl-7 pt-2 text-[0.9rem] sm:text-sm font-medium text-gray-400
                                                            after:content-[''] after:absolute after:block after:top-[0.85rem] 
                                                            after:left-0 after:z-2 after:h-2 after:w-2 after:rounded-full after:bg-gray-400 dark:after:bg-white tracking-[0.03rem]">{ tech.name }</h3>
                                                        </div>
                                                    );
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                {
                    !isMobileDevice ? <button onClick={() => {
                        props.handleEventSelect(2) 
                        props.handleCurrentIndex(2)
                    }} className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">See all expertise</button>
                    : <NavLink to="/expertise" className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">
                        See all expertise
                    </NavLink>
                }
            </div>
            <div className="mt-6 mb-12 mx-8 sm:mx-4 md:mx-0">
                <h1 className="text-[1.3rem] md:text-xl font-bold dark:md:font-semibold text-gray-700 dark:text-white">Recent Work Experience</h1>
                <div className="mt-6 mb-3 px-1 sm:px-5 md:px-6 py-3 border dark:border-l-[6px] border-gray-300 dark:border-blue4 dark:border-t dark:border-r dark:border-b rounded bg-white dark:bg-gray-700">
                    <div className="space-y-1">
                        <div className="py-1">
                            <h1 className="pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white tracking-[0.03rem]">
                                Front-End Developer (Remote)
                            </h1>
                            <h4 className="pl-4 md:pl-0 text-gray-400 text-sm font-medium tracking-[0.03rem]">Laravel + Vuejs Developer</h4>
                        </div>
                        <div className="py-1">
                            <h1 className="pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white tracking-[0.03rem]">
                                Front-End Development Engineer
                            </h1>
                            <h4 className="pl-4 md:pl-0 text-gray-400 text-sm font-medium tracking-[0.03rem]">ReactJS Developer</h4>
                        </div>
                    </div>
                </div>
                {
                    !isMobileDevice ? <button onClick={() => {
                        props.handleEventSelect(3) 
                        props.handleCurrentIndex(3)
                    }} className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">See work experience history</button>
                    : <NavLink to="/experience" className="text-sm text-blue4 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-gray-300 dark:text-white font-semibold dark:font-normal">
                        See work experience history
                    </NavLink>
                }
                
            </div>
        </motion.div>
    )
}

export default Overview;