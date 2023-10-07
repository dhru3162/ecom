import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { toast } from 'react-toastify'

const MyOrders = () => {
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
            });
    }, [])

    return (
        <>
            <Navbar />
        </>
    )
}

export default MyOrders
