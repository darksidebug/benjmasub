import { motion } from "framer-motion"

const Education = ( props ) => {
    return (  
        <motion.div 
            className={`mb-12 ${props.isMobile ? 'pl-3' : 'pl-8'}`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <h1 className="block mt-10 ml-6 sm:ml-0 text-left text-[1.5rem] md:text-xl font-bold dark:md:font-semibold text-gray-600 dark:text-blue4">Educational Background</h1>
            <div className="relative mt-6 px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                        after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500">
                <div className="space-y-1">
                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                            Master's Degree
                    </h1>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Master of Science in Information Technology</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Southern Leyte State University</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">January 2021 - January 2022</h3>
                </div>
            </div>
            <div className="relative px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                        after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500">
                <div className="space-y-1">
                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                            Bachelor's Degree
                    </h1>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Bachelor of Science in Information Technology</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Southern Leyte State University</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">October 2015 - June 2020</h3>
                </div>
            </div>
            <div className="relative px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                        after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500">
                <div className="space-y-1">
                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                            Secondary Education
                    </h1>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Libagon Academy Foundation Inc.</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Libagon Southern Leyte</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">June 2001 - May 2004</h3>
                </div>
            </div>
            <div className={`relative ${props.isMobile ? 'mb-24' : ''} px-10 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                        after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500`}>
                <div className="space-y-1">
                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                            Primary Education
                    </h1>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Libagon Central Elementary School</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Libagon Southern Leyte</h3>
                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">June 1995 - May 2001</h3>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Education;