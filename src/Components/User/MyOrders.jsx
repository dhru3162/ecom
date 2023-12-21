import React, { useEffect } from 'react'
import Navbar from '../Navbars/Navbar'
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    // const navigate = useNavigate()

    useEffect(() => {

        toast('Coming Soon', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <Navbar />
            {/* <div className='pt-16 dark:bg-black h-screen'>
                <div className='px-[20%] pt-20 dark:bg-black'>
                    <h1 className=' font-bold text-4xl font-sans dark:text-white'>Your Orders</h1>
                </div>
            </div> */}
        </>
    )
}

export default MyOrders
