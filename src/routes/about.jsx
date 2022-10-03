import { motion } from "framer-motion"

const About = ( props ) => {
    return (  
        <motion.div 
            className={`container mx-auto px-8 md:px-6 mt-10 ${ props.isMobile ? 'mb-24' : ''} sm:mt-16`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <div className="flex justify-center md:px-20">
                <div className="w-12/12 md:w-7/12">
                    <h1 className="text-3xl md:text-5xl font-semibold text-blue4">About Me</h1>
                    <h4 className="mt-4 md:text-xl font-semibold text-gray-500 dark:text-white">BRIEF INTRODUCTION</h4>
                    <div className="mt-10">
                        <h1 className="text-xl md:text-3xl font-semibold text-blue4">WHO AM I?</h1>
                        <div className="mt-4">
                            <p className="text-lg md:text-xl text-gray-500 dark:text-white text-justify">
                                I am a developer who loves to innovate and developed softwares. I can be a front-end
                                or back-end developer. Have a knowledge in UI/UX designing. I have been 
                                part of a development team and actively participating on every scrum meeting. Also, 
                                I'm involved and participated in a software development that helps the community 
                                specially in COVID-19 contact tracing programs.
                            </p>
                        </div>
                        <div className="flex justify-start items-center mt-8 space-x-2">
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
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
 
export default About;