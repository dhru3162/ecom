import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginSignup = () => {
    const [checkNum, setCheckNum] = useState()
    const [userData, setUserData] = useState({ email: '', mobile: '', pass: '', fname: "", lname: '', signup: false })
    const [existuser, setexistuser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        existlist() // eslint-disable-next-line
    }, [])

    const existlist = async () => {
        await axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`)
            .then((res) => {
                setexistuser(res.data)
            })
            .catch((err) => {
                alert(err.message)
                navigate('/')
            })
    }
    // eslint-disable-next-line 

    const checklogin = () => {
        var error = {}

        // eslint-disable-next-line 
        existuser.map((data) => {
            if (checkNum) {
                if (data.mobile === userData.mobile) {
                    error.mobile = 'Mobile Number Already Exists'
                }
            } else {
                if (data.email === userData.email) {
                    error.email = 'Email Already Exists'
                }
            }

            // if (data.email === userData.email) {
            //     error.email = 'Email Already Exists'
            // }
            // if (data.mobile === userData.mobile) {
            //     error.mobile = 'Mobile Number Already Exists'
            // }
        })

        return Object.keys(error).length === 0
    }



    const submit = (e) => {
        // console.log(checklogin())
        e.preventDefault()
        if (checklogin()) {
            if (checkNum) {
                fetch("https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userData)
                })
                    .then(() => {
                        sessionStorage.setItem('mobile', userData.mobile)
                        toast.success('Register Successfully')
                        navigate(`/ragister`)
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            } else {
                fetch("https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userData)
                })
                    .then(() => {
                        sessionStorage.setItem('email', userData.email)
                        toast.success('Register Successfully')
                        navigate(`/ragister`)
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            }

        } else {
            if (checkNum) {
                fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?mobile=${userData.mobile}`)
                    .then((res) => {
                        return res.json()
                            .then((data) => {
                                if (data[0].pass === userData.pass) {
                                    sessionStorage.setItem('mobile', userData.mobile)
                                    toast.success('Login Successfully')
                                    if (data[0].signup) {
                                        navigate('/')
                                    } else {
                                        navigate(`/ragister`)
                                    }
                                }
                                else
                                    alert("Your Mobile Number Or Password Is Incorrect")
                            })
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            } else {
                fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${userData.email}`)
                    .then((res) => {
                        return res.json()
                            .then((data) => {
                                if (data[0].pass === userData.pass) {
                                    sessionStorage.setItem('email', userData.email)
                                    toast.success('Login Successfully')
                                    if (data[0].signup) {
                                        navigate('/')
                                    } else {
                                        navigate(`/ragister`)
                                    }
                                }
                                else
                                    alert("Your Email Id Or Password Is Incorrect")
                            })
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            }
            // fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${userData.email}`)
            //     .then((res) => {
            //         return res.json()
            //             .then((data) => {
            //                 if (data[0].pass === userData.pass) {
            //                     sessionStorage.setItem('email', userData.email)
            //                     toast.success('Login Successfully')
            //                     if (data[0].signup) {
            //                         navigate('/')
            //                     } else {
            //                         navigate(`/ragister`)
            //                     }
            //                 }
            //                 else
            //                     alert("Wrong Password")
            //             })
            //     })
            //     .catch((err) => {
            //         alert(err.message)
            //     })
        }
    }

    const paste = (e) => {
        e.preventDefault()
        toast("Pasting is not allowed!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    // console.log(submit())

    return (
        <>
            <Navbar />
            <div className='mt-16'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Login / SignUp
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={submit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile No. / Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        required
                                        autoComplete='off'
                                        onPaste={(e) => paste(e)}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => {
                                            // const value = e.target.value
                                            setCheckNum(!isNaN(e.target.value))
                                            // console.log(!isNaN(+e.target.value))
                                            // console.log(checkNum)
                                            if (checkNum) {
                                                setUserData({ ...userData, mobile: e.target.value, email: '' })
                                            } else {
                                                setUserData({ ...userData, email: e.target.value, mobile: '' })
                                            }
                                        }}
                                    />
                                </div>
                                <small>{ }</small>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link className="font-semibold text-blue-700 hover:text-blue-800">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        required
                                        onPaste={(e) => paste(e)}
                                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => { setUserData({ ...userData, pass: e.target.value }) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login / SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup
