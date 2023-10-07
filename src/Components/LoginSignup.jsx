import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from './Loader/Loader'
import { Datacontext } from './Context'
import { NavLink } from 'react-router-dom'

const LoginSignup = () => {
    const [checkNum, setCheckNum] = useState()
    const [userData, setUserData] = useState({ email: '', mobile: '', pass: '', fname: "", lname: '', signup: false, role: 'user' })
    const [existuser, setexistuser] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const email = sessionStorage.getItem('email')
    const mobile = sessionStorage.getItem('mobile')
    const contextData = useContext(Datacontext)
    const { setchang, change } = contextData

    useEffect(() => {
        existlist()
        // eslint-disable-next-line
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

    const checklogin = () => {
        var error = {}

        // eslint-disable-next-line 
        existuser.map((data, index) => {
            if (checkNum) {
                if (data.mobile === userData.mobile) {
                    error.mobile = 'Mobile Number Already Exists'
                }
            } else {
                if (data.email.toUpperCase() === userData.email.toUpperCase()) {
                    error.email = 'Email Already Exists'
                }
            }
            <div key={index}></div>
        })

        return Object.keys(error).length === 0
    }


    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (checklogin()) {
            if (checkNum) {
                fetch("https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userData)
                })
                    .then(() => {
                        sessionStorage.setItem('mobile', userData.mobile)
                        sessionStorage.setItem('role', userData.role)
                        axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?mobile=${userData.mobile}`)
                            .then((data) => {
                                const userdata = data.data[0].id
                                axios.post(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts`, { userid: `${userdata}`, product: [] }, {
                                    headers: { 'content-type': 'application/json' },
                                })
                            })
                        setLoading(false)
                        toast.success('Register Successfully')
                        setchang(!change)
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
                        sessionStorage.setItem('role', userData.role)
                        axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${userData.email}`)
                            .then((data) => {
                                const userdata = data.data[0].id
                                axios.post(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts`, { userid: `${userdata}`, product: [] }, {
                                    headers: { 'content-type': 'application/json' },
                                })
                            })
                        setLoading(false)
                        toast.success('Register Successfully')
                        setchang(!change)
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
                                    sessionStorage.setItem('role', data[0].role)
                                    setLoading(false)
                                    setchang(!change)
                                    if (data[0].signup) {
                                        navigate('/')
                                    } else {
                                        navigate(`/ragister`)
                                    }
                                    if (data[0].role === 'admin') {
                                        toast.success('Admin Logged Successfully')
                                    } else {
                                        toast.success('Login Successfully')
                                    }
                                }
                                else {
                                    setLoading(false)
                                    toast.error("Your Mobile Number Or Password Is Incorrect")
                                }
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
                                    sessionStorage.setItem('role', data[0].role)
                                    setLoading(false)
                                    setchang(!change)
                                    if (data[0].signup) {
                                        navigate('/')
                                    } else {
                                        navigate(`/ragister`)
                                    }
                                    if (data[0].role === 'admin') {
                                        toast.success('Admin Logged Successfully')
                                    } else {
                                        toast.success('Login Successfully')
                                    }
                                }
                                else {
                                    setLoading(false)
                                    toast.error("Your Email Id Or Password Is Incorrect")
                                }
                            })
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            }
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

    return (
        <div className='dark:bg-black h-screen'>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <div className='dark:bg-black'>
                    {email !== null || mobile !== null ? (
                        <>
                            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-indigo-600">405</p>
                                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
                                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, you couldn’t access this page because user already logged in</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <NavLink
                                            to="/"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Continue shopping
                                        </NavLink>
                                        <NavLink to="/contact" className="text-sm font-semibold text-gray-900">
                                            Contact support <span aria-hidden="true">&rarr;</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </main>
                        </>
                    ) : (
                        <>
                            <div div className='mt-16 ' >
                                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <img
                                            className="mx-auto h-10 w-auto"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                                            Login / SignUp
                                        </h2>
                                    </div>

                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" onSubmit={submit}>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                    Mobile No. / Email address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        required
                                                        autoComplete='off'
                                                        onPaste={(e) => paste(e)}
                                                        className="block w-full rounded-md outline-none border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                        onChange={(e) => {
                                                            setCheckNum(!isNaN(e.target.value))
                                                            if (checkNum) {
                                                                setUserData({ ...userData, mobile: e.target.value, email: '' })
                                                            } else {
                                                                setUserData({ ...userData, email: e.target.value, mobile: '' })
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                        Password
                                                    </label>
                                                    <div className="text-sm">
                                                        <button type='button' className="font-semibold text-blue-700 hover:text-blue-800"
                                                            onClick={() => {
                                                                toast('Coming Soon', {
                                                                    position: "bottom-right",
                                                                    autoClose: 5000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: true,
                                                                    pauseOnHover: true,
                                                                    draggable: true,
                                                                    progress: undefined,
                                                                    theme: "light",
                                                                });
                                                            }}
                                                        >
                                                            Forgot password?
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <input
                                                        type="password"
                                                        required
                                                        onPaste={(e) => paste(e)}
                                                        className="block w-full pl-2 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
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
                    )}
                </div>
            )}
        </div>
    )
}

export default LoginSignup




