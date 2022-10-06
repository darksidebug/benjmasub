import experience from "../data/experience";
import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { motion } from "framer-motion"

const Experience = () => {
    const { isMobileDevice } = useContext(Context);
    return (  
        <motion.div 
            className={ isMobileDevice ? 'pl-3' : 'pl-8'}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <h1 className="block mt-10 ml-6 sm:ml-0 text-[1.5rem] md:text-xl font-bold dark:md:font-semibold text-gray-600 dark:text-blue4">Work Experience</h1>
            <div className={`md:overflow-y-auto mt-6 ${ isMobileDevice ? 'mb-24' : 'mb-12'} md:max-h-[80vh] scrollbar`}>
            {
                experience.map(
                    (experience, index) => {
                        return (
                            <div className="relative first:mt-6 px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                                after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500" key={`xpe_${index}`}>
                                <div className="space-y-1">
                                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                                            { experience.position }
                                    </h1>
                                    {
                                        experience.tech != "" && (
                                            <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.tech } Developer</h3>
                                        )
                                    }
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.company }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.address }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.year }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Job Description:</h3>
                                    <div className="md:w-[20rem] lg:w-[28rem] pl-10 sm:pl-6">
                                        <p className="text-[0.9rem] sm:text-sm text-justify font-medium text-gray-400 tracking-[0.03rem]">
                                            { experience.description } 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
            </div>
        </motion.div>
    );
}
 
export default Experience;