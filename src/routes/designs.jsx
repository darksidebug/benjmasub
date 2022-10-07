import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { motion } from "framer-motion"

const Designs = () => {
    const { isMobileDevice } = useContext(Context);
    return (  
        <motion.div 
            className={`mt-10 ${ isMobileDevice ? 'mb-24' : ''} sm:mt-16`}
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit    = {{ opacity: 0 }}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex justify-center items-center pt-24 text-gray-700 dark:text-white">
                <h3 className="text-3xl font-medium">UI Designs</h3>
              </div>
              <div className="flex justify-center items-center pt-2 pb-24 text-gray-700 dark:text-white">
                <h5>Coming Soon ...</h5>
              </div>
            </div>
        </motion.div>
    );
}
 
export default Designs;