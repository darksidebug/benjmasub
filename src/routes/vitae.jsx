import { motion } from "framer-motion"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Vitae = ( props ) => {
    return (  
        <motion.div 
            className={`container mx-auto ${ props.isMobile ? 'mb-20' : ''} py-10 px-4 md:px-2 lg:px-8`}
            initial = {{ opacity: 0 }}
			animate = {{ opacity: 1 }}
			exit    = {{ opacity: 0 }}>
            <Document className="flex justify-center items-center text-gray-500 dark:text-white" file={ process.env.PUBLIC_URL + '/Updated_Resume.pdf' } loading="Loading CV/Resume…">
                <Page pageNumber={ 1 } />
            </Document>
        </motion.div>
    );
}
 
export default Vitae;