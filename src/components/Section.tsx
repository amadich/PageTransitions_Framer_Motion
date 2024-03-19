import React from 'react';

import { motion } from 'framer-motion';

const Section: React.FC = () => {
   
   const gridSectionVariants = { 
               hidden: { opacity: 0 , scale: 0},
               visible: 
                  {  opacity: 1 , scale: 1,
                     transition: {staggerChildren: 0.25 } 
                  } 
        };
   
        const gridItemVariants = { hidden: {opacity: 0 , scale: 0} , visible: {opacity: 1 , scale: 1} };

   return (
      
      <>
         <motion.section 
            variants={gridSectionVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden" // Add exit animation
            className="flex justify-center"
         >
         
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the first card */}
            </motion.div>
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the second card */}
            </motion.div>
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the third card */}
            </motion.div >
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the fourth card */}
            </motion.div>


            
        
      </motion.section>
      <motion.section 
            variants={gridSectionVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden" // Add exit animation
            className="flex justify-center"
         >
         
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the first card */}
            </motion.div>
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the second card */}
            </motion.div>
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the third card */}
            </motion.div >
            <motion.div variants={gridItemVariants} className="bg-slate-300 shadow-md rounded-lg p-4 m-4 w-72 h-96">
               {/* Content for the fourth card */}
            </motion.div>


            
        
      </motion.section>
      </>

      
   );
};

export default Section;