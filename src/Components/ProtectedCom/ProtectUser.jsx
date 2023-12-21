import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader'
import Navbar from '../../Components/Navbars/Navbar'

const ProtectAdmin = (props) => {
    const { Comp } = props
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const email = localStorage.getItem('email')
    const mobile = localStorage.getItem('mobile')
    const [authDone, setAuthDone] = useState(false)

    useEffect(() => {
        if (email === null && mobile === null) {
            navigate('/login')
            toast('Please login first')
        } else if (role !== 'user') {
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
                    navigate('/')
                    toast('Something went wrong')
                })
        }
    })

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
