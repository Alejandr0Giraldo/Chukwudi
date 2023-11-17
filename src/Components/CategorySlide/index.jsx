// import React from "react";
import categories from "../../../categories.json";
import { motion } from "framer-motion";

const CategorySlide = () => {
    return (
        <motion.div className='overflow-hidden m-0 w-auto max-md:mr-2'>
            <motion.div
                className='flex cursor-grab gap-4'
                drag='x' dragConstraints={{right:0, left:-385}}
            >
                {categories.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={item.id} className='bg-white w-auto p-2 rounded-full hover:bg-amber-300 '>
                        <div className='flex flex-col items-center'>
                            <div className='bg-white overflow-hidden p-2 w-20 rounded-full'>
                                <img  src={item.icon} alt={`${item.name} icon`} className=' '/>
                            </div>
                            <p className=' mt-8 '>{item.name}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default CategorySlide