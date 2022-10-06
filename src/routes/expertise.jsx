import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import ExpertiseList from "../data/expertise"
import { motion } from "framer-motion"

const Expertise = () => {
    const { isMobileDevice } = useContext(Context);
    return (  
        <motion.div 
            className={ isMobileDevice ? 'pl-3' : 'pl-8'}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <h1 className="block mt-10 ml-6 sm:ml-0 text-[1.5rem] md:text-xl font-bold dark:md:font-semibold text-gray-600 dark:text-blue4">Knowledge and Expertise</h1>
            <div className={`md:overflow-y-auto mt-6 ${ isMobileDevice ? 'mb-24' : 'mb-12'} md:h-[80vh] scrollbar`}>
                {
                    ExpertiseList.map((expertise, index) => {
                        return(
                            <div className="relative first:mt-6 px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                                after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500" key={ index }>
                                <div className="space-y-1">
                                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                                            { expertise.name }
                                    </h1>
                                    <div className="pl-4">
                                        {
                                            expertise.tech.map(
                                                (tech, i) => {
                                                    return(
                                                        <div key={ i }>
                                                            <h3 className="relative z-10 pl-7 pt-2 text-[0.9rem] sm:text-sm font-medium text-gray-400
                                                            after:content-[''] after:absolute after:block after:top-[0.85rem] 
                                                            after:left-0 after:z-2 after:h-2 after:w-2 after:rounded-full after:bg-gray-400 dark:after:bg-white tracking-[0.03rem]">{ tech.name }</h3>
                                                            <div className="pl-7">
                                                                <h3 className="text-[0.8rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Level of Expertise: { tech.level }</h3>
                                                                <h3 className="text-[0.8rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Year of Experience: { tech.years }</h3>
                                                            </div>
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
        </motion.div>
    );
}
 
export default Expertise;