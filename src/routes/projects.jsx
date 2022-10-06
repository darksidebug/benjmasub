/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import ProjectsList from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
    const { isMobileDevice } = useContext(Context);
    return (  
        <motion.div 
            className={`mt-10 ${ isMobileDevice ? 'mb-24' : ''} sm:mt-16`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <div className="container mx-auto px-4">
                <div className="lg:flex justify-between lg:justify-center">
                    <div className="w-12/12 lg:w-10/12 xl:w-8/12">
                        <div className="flex justify-start md:justify-between items-center pb-5 px-1 border-b border-gray-200 dark:border-gray-600">
                            <h1 className="w-72 sm:w-full text-2xl md:text-3xl text-gray-600 dark:text-blue4 font-bold sm:font-semibold">
                            {
                                isMobileDevice ?
                                <>Projects<br/> Developed</>
                                :
                                <>Projects Developed</>
                            }
                            </h1>
                            <div className="sm:flex justify-start md:justify-end items-center space-x-2">
                                <a href="https://github.com/darksidebug?tab=repositories" className="block py-2 px-2.5 w-[8.8rem] md:w-[10.1rem] border border-gray-300 hover:border-blue4 dark:border-0 rounded-md text-gray-500 dark:text-white 
                                    hover:text-white dark:hover:md:text-blue4 text-sm font-medium tracking-[0.03rem] bg-white dark:bg-gray-600 hover:bg-blue4">
                                    <span className="hidden md:block">See All Repositories</span>
                                    <span className="block md:hidden">See Repositories</span>
                                </a>
                            </div>
                        </div>
                        {/* <h3 className="mt-8 text-gray-500 dark:text-white font-semibold text-xl">Remarkable Projects</h3> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-12 px-4 sm:px-10 md:px-0">
                        {
                            ProjectsList.map(
                                (project, index) => {
                                    return (
                                        <div className="overflow-hidden border dark:border-2 dark:border-gray-600 rounded-xl" key={ index }>
                                            <div className="group">
                                                <div className="overflow-hidden relative h-36 sm:h-20 border dark:border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100">
                                                    <img width="500" src={ project.img } alt="Project Image" />
                                                </div>
                                            </div>
                                            <div className="overflow-hidden px-2 py-1 bg-gray-50 dark:bg-gray-600">
                                                <h3 className="text-[0.9rem] font-medium text-gray-600 dark:text-gray-100 truncate">{ project.name }</h3>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Projects;