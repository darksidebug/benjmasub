/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { motion } from "framer-motion"

const Contact = () => {
    const { isMobileDevice } = useContext(Context);
    return (  
        <motion.div 
            className={`container mx-auto ${ !isMobileDevice ? 'mt-8 md:mt-20' : 'mt-8'} mb-24 px-4 md:px-2 lg:px-8`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <div className="flex justify-center">
                <div className="w-12/12">
                    <div className="block sm:flex justify-between">
                        <div className="w-12/12 md:4/12 lg:6/12 md:pr-20 pb-6">
                            {
                                !isMobileDevice ?
                                <h1 className="mb-8 text-blue4 text-3xl md:text-5xl font-bold">Let's talk about<br/> your project.</h1>
                                :
                                <h1 className="mb-8 text-blue4 text-3xl md:text-5xl font-bold">Let's talk about your project.</h1>
                            }
                            <h5 className="text-gray-500 dark:text-white">Leave me a message or contact me directly.</h5>
                            <div className="mt-6 flex justify-start md:block space-y-2 space-x-2 md:space-x-0">
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZdDZtPvrNxphPgQKGHFwXctzDJztNmKpThCDQbTrkFSBkCXbhcfdpQTdvXTWrZfFgmvKh" target="_blank" className="block md:border border-gray-300 dark:border-gray-500 rounded-md">
                                    <div className="mt-2 md:mt-0 inline-block py-2 px-3 h-10 w-10 border md:border-0 md:border-r border-gray-300 md:border-gray-300 dark:border-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none text-gray-600 md:text-gray-500 
                                                hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white md:bg-white dark:bg-gray-600 dark:hover:bg-gray-600 cursor-pointer">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <span className="hidden md:inline-block mx-3 text-sm text-gray-400 dark:text-gray-300">nobeginmasob@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/benigno-ambus-84abb422a/" traget="_blank" className="block md:border border-gray-300 dark:border-gray-500 rounded-md">
                                    <div className="inline-block py-2 px-3 h-10 w-10 border md:border-0 md:border-r border-gray-300 md:border-gray-300 dark:border-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none text-gray-600 md:text-gray-500 
                                                hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white md:bg-white dark:bg-gray-600 dark:hover:bg-gray-600 cursor-pointer">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <span className="hidden md:inline-block mx-3 text-sm text-gray-400 dark:text-gray-300">in/benigno-ambus-84abb422a</span>
                                </a>
                                <a href="https://www.facebook.com/dArkSidEbUg" traget="_blank" className="block md:border border-gray-300 dark:border-gray-500 rounded-md">
                                    <div className="inline-block py-2 px-3.5 h-10 w-10 border md:border-0 md:border-r border-gray-300 md:border-gray-300 dark:border-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none text-gray-600 md:text-gray-500 
                                                hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white md:bg-white dark:bg-gray-600 dark:hover:bg-gray-600 cursor-pointer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <span className="hidden md:inline-block mx-3 text-sm text-gray-400 dark:text-gray-300">facebook.com/dArkSidEbUg</span>
                                </a>
                                <a href="https://github.com/darksidebug" traget="_blank" className="block md:border border-gray-300 dark:border-gray-500 text-sm rounded-md">
                                    <div className="inline-block py-2.5 px-3 h-10 w-10 border md:border-0 md:border-r border-gray-300 md:border-gray-300 dark:border-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none text-gray-600 md:text-gray-500 
                                                hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white md:bg-white dark:bg-gray-600 dark:hover:bg-gray-600 cursor-pointer">
                                        <i className="fa-brands fa-github"></i>
                                    </div>
                                    <span className="hidden md:inline-block mx-3 text-sm text-gray-400 dark:text-gray-300">github.com/darksidebug</span>
                                </a>
                            </div>
                            <div className="block md:hidden mt-4 mb-2">
                                <h2 className="text-sm text-gray-600 dark:text-gray-300">Email: nobeginmasob@gmail.com</h2>
                                <h2 className="text-sm text-gray-600 dark:text-gray-300">Phone: 09665317258 | 09367653842</h2>
                            </div>
                        </div>
                        <div className="w-12/12 py-3 md:py-6 px-6 md:px-12 border border-gray-300 dark:border-gray-500 rounded-lg dark:bg-gray-600 ">
                            <h1 className="mb-8 text-gray-600 dark:text-white dark:md:text-blue4 md:text-gray-500 text-2xl md:text-3xl font-bold">Leave me a<br /> message.</h1>
                            <input type="text" className="block my-2 px-4 py-2 w-full md:w-72 lg:w-96 border border-gray-200 dark:border-gray-500 rounded-md text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-600 
                                focus:outline focus:outline-blue4 focus:outline-2" placeholder="Enter full name ..." />
                            <input type="email" className="block my-2 px-4 py-2 w-full md:w-72 lg:w-96 border border-gray-200 dark:border-gray-500 rounded-md text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-600 
                                focus:outline focus:outline-blue4 focus:outline-2" placeholder="Enter email add ..." />
                            <textarea className="block p-4 my-2 w-full md:w-72 lg:w-96 border border-gray-200 dark:border-gray-500 rounded-md bg-white dark:bg-gray-600 dark:text-gray-300  text-gray-600 focus:outline focus:outline-blue4 focus:outline-2" 
                                name="" id="" cols="30" rows="7" placeholder="Write your message here ...">

                            </textarea>
                            <button className="mb-3 py-2.5 px-5 rounded-md text-white font-semibold bg-blue4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-2" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                </svg>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Contact;