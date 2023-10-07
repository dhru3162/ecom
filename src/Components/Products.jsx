import React, { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import { toast } from 'react-toastify';

const Products = () => {
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
    <div className='dark:bg-black h-screen'>
     <AdminNavbar/> 
    </div>
  )
}

export default Products