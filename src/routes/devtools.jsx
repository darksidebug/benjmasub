/* eslint-disable jsx-a11y/img-redundant-alt */
import ToolsList from "../data/tools"
import { motion } from "framer-motion"

const Tools = ( props ) => {
    return (  
        <motion.div 
            className={`mt-10 ${ props.isMobile ? 'mb-24' : ''} sm:mt-16`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="lg:flex justify-between lg:justify-center">
                    <div className="w-12/12 lg:w-10/12 xl:w-8/12">
                        <div className="flex justify-start md:justify-between items-center pb-5 px-1 border-b border-gray-200 dark:border-gray-600">
                            <h1 className="w-72 sm:w-full text-2xl md:text-3xl text-gray-600 dark:text-blue4 font-bold sm:font-semibold">
                            {
                                props.isMobile ?
                                <>Development<br/> Tools</>
                                :
                                <>Development Tools</>
                            }
                            </h1>
                        </div>
                        <h3 className="mt-8 text-gray-500 dark:text-white font-semibold text-xl">Most Common Tools</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 mb-12 px-4 sm:px-10 md:px-0">
                        {
                            ToolsList.map(
                                (tools, index) => {
                                    return (
                                        <div className="overflow-hidden border dark:border-gray-500 rounded-xl dark:bg-gray-600" key={ index }>
                                            <img width="500" src={ tools.img } alt="Project Image" />
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
 
export default Tools;