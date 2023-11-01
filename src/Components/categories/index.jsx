import React from 'react';

const  Categories = ({ name, icon,}) => {

    return(
        <button className=' bg-slate-50 hover:bg-amber-300 flex flex-col items-center p-3 m-3 rounded-full cursor-pointer  '>
            <div className='bg-white rounded-full w-fit p-3  border-2'>
                <img src={icon} alt={`${name} icon`} className=' w-auto'/>
            </div>
            <p className=' my-4'>{name}</p>
        </button>

    )
}

export default Categories