// import React from "react";
import categories from "../../../categories.json";
import { motion } from "framer-motion";
import "./styles.css"


// eslint-disable-next-line react/prop-types
const CategorySlide = ({handleCategory}) => {

    return (
        <motion.div

            className='container'>
            <motion.div
                className='slide'
                drag='x' dragConstraints={{right:0, left:-385}}
            >
                {categories.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div onClick={() => handleCategory(item.id)} key={item.id} className='container-categories'>
                        <div className='text'>
                            <div className='container-image'>
                                <img  src={item.icon} alt={`${item.name} icon`} className=' '/>
                            </div>
                            <p className=' name'>{item.name}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default CategorySlide