import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from './Navbar'
import "./Numberstyle.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Loader from './Loader/Loader'

const RagisterDetails = () => {
    const navigate = useNavigate()
    const [userdata, setuserdata] = useState({ fname: "", lname: "", mobile: "", email: "" })
    const [mobilemail, setmobilemaile] = useState({})
    const [existuser, setexistuser] = useState([])
    const [err, seterr] = useState({})
    const email = localStorage.getItem('email')
    const ifmobile = localStorage.getItem('mobile')
    const role = localStorage.getItem('role')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (email !== null || ifmobile !== null) {
            navigate('/')
            // if (role === 'admin') {
            //     toast('Admin already loggedin')
            // } else {
            //     toast('User already loggedin')
            // }
        } else if (email === null || ifmobile === null) {
            navigate('/login')
        }
        emaildata()
        existlist()
        // eslint-disable-next-line
    }, [])

    const emaildata = async () => {
        if (ifmobile === null) {
            await axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${email}`)
                .then((data) => {
                    setmobilemaile(data.data[0])
                    setuserdata(data.data[0])
                    if (data.data[0].signup) {
                        navigate('/')
                        if (role === 'admin') {
                            toast('Admin already registered')
                        } else {
                            toast('User already registered')
                        }
                        // toast('Admin already loggedin')
                    }
                    setLoading(false)
                })
                .catch((errd) => {
                    toast(errd.massage)
                })
        } else {
            await axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?mobile=${ifmobile}`)
                .then((data) => {
                    setmobilemaile(data.data[0])
                    setuserdata(data.data[0])
                    if (data.data[0].signup) {
                        navigate('/')
                        if (role === 'admin') {
                            toast('Admin already registered')
                        } else {
                            toast('User already registered')
                        }
                    }
                    setLoading(false)
                })
                .catch((errd) => {
                    toast(errd.massage)
                })
        }
    }

    const existlist = async () => {
        await axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`)
            .then((res) => {
                setexistuser(res.data)
            })
            .catch((err) => {
                toast(err.message)
                navigate('/')
            })
    }

    const check = () => {
        let error = {}

        // eslint-disable-next-line 
        existuser.map((data) => {
            if (mobilemail.mobile === "") {
                if (data.mobile === userdata.mobile) {
                    error.mobile = 'Mobile Number Already Exists'
                }
            }
            if (mobilemail.email === '') {
                if (data.email === userdata.email) {
                    error.email = 'Email Already Exists'
                }
            }
        })

        seterr(error)
        return Object.keys(error).length === 0
    }


    const submit = (e) => {
        e.preventDefault()

        if (check()) {
            fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${mobilemail.id}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userdata)
            })
                .then(() => {
                    localStorage.setItem('email', userdata.email)
                    toast.success('Details Updated Successfully')
                    navigate('/')
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    }

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <div>
                        {/* {email === null && ifmobile === null ? (
                            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                                <div className="text-center">
                                    <p className="text-base font-semibold text-indigo-600">405</p>
                                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
                                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t access this page without login please login first</p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <NavLink
                                            to="/login"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Login Now
                                        </NavLink>
                                        <NavLink to="/contact" className="text-sm font-semibold text-gray-900">
                                            Contact support <span aria-hidden="true">&rarr;</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </main>
                        ) : (
                            <> */}
                        {mobilemail.signup ? (
                            <div className='dark:bg-black h-screen'>
                                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                                    <div className="text-center">
                                        <p className="text-base font-semibold text-indigo-600">400</p>
                                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong</h1>
                                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t access this page you’re looking for.</p>
                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                            <NavLink
                                                to="/"
                                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Go to home
                                            </NavLink>
                                            <NavLink to="/contact" className="text-sm font-semibold text-gray-900">
                                                Contact support <span aria-hidden="true">&rarr;</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        ) : (
                            <div className='dark:bg-black h-screen'>
                                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-black">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                                            Fill Your Basic Details
                                        </h2>
                                    </div>
                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" onSubmit={submit}>
                                            <div>
                                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                    First Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={userdata.fname}
                                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                        onChange={(e) => {
                                                            setuserdata({ ...userdata, fname: e.target.value })
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                    Last Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={userdata.lname}
                                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                        onChange={(e) => {
                                                            setuserdata({ ...userdata, lname: e.target.value })
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {mobilemail.mobile === "" && (
                                                <div>
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                        Mobile Number
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="number"
                                                            value={userdata.mobile}
                                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                            onChange={(e) => {
                                                                seterr({})
                                                                setuserdata({ ...userdata, mobile: e.target.value })
                                                            }}
                                                        />
                                                        <small><span className='text-red-600'>{err.mobile}</span></small>
                                                    </div>
                                                </div>
                                            )}

                                            {mobilemail.email === '' && (
                                                <div>
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                        Email Address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="email"
                                                            required
                                                            value={userdata.email}
                                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                            onChange={(e) => {
                                                                seterr({})
                                                                setuserdata({ ...userdata, email: e.target.value })
                                                            }}
                                                        />
                                                        <small><span className=' text-red-600'>{err.email}</span></small>
                                                    </div>
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                                    Password
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={userdata.pass}
                                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                        onChange={(e) => {
                                                            setuserdata({ ...userdata, pass: e.target.value })
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    onClick={() => {
                                                        setuserdata({ ...userdata, signup: true })
                                                    }}
                                                >
                                                    Ragister
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* </>

                        )} */}
                    </div>

                </div>
            )}
        </div>
    )
}

export default RagisterDetails
