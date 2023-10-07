import React from 'react'
import { HashLoader } from 'react-spinners';
 
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen dark:bg-black'>
            <HashLoader color="#1D4EDA" />
        </div>
    )
}

export default Loader
