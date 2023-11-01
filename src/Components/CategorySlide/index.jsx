import React from "react";
import categories from "../../../categories.json";
import { motion } from "framer-motion";

const CategorySlide = () => {
    return (
        <motion.div className='overflow-hidden m-0'>
            <motion.div
                className='flex cursor-grab gap-4'
                drag='x' dragConstraints={{right:0, left:-385}}
            >
                {categories.map((item) => (
                    <motion.div className='flex flex-row '>
                        <motion.button className='bg-slate-50 hover:bg-amber-300 flex flex-col items-center p-4 rounded-full cursor-pointer'>
                            <motion.div className='bg-white rounded-full border-2 overflow-hidden place-self-center '>
                                <img  src={item.icon} alt={`${item.name} icon`} className='w-screen'/>
                            </motion.div>
                            <p className=' mt-8 '>{item.name}</p>
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default CategorySlide