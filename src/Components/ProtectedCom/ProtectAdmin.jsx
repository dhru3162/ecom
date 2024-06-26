import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader'
import Navbar from '../../Components/Navbars/AdminNavbar'

const ProtectAdmin = ({ Comp }) => {
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const email = localStorage.getItem('email')
    const [authDone, setAuthDone] = useState(false)

    useEffect(() => {
        if (email === null) {
            navigate('/login')
            toast('Please login first')
        } else if (role !== 'admin') {
            navigate('/')
            toast('Something went wrong')
        } else {
            axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${email}`)
                .then((res) => {
                    if (res.data.length === 0) {
                        toast.error('Somthing Went Wrong Login Again')
                        localStorage.clear('email')
                        localStorage.clear('role')
                        navigate(`/login`)
                    } else {
                        setAuthDone(true)
                    }
                })
                .catch((err) => {
                    toast(`${err.massage} Reload Page`)
                })
        }
         // eslint-disable-next-line
    }, [role, email])

    return (
        <>
            {authDone ? (
                <Comp />
            ) : (
                <>
                    <Navbar />
                    <Loader />
                </>
            )}
        </>
    )
}

export default ProtectAdmin
