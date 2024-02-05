import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbars/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../Home/Footer'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { toast } from 'react-toastify'
import { Datacontext } from '../Context'
import AdminNavbar from '../Navbars/AdminNavbar'

const Profile = () => {
    const navigate = useNavigate()
    const checkemail = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    const [data, setdata] = useState({ fname: "", lname: "", mobile: "", email: "", pass: "", id: '' })
    const [loading, setLoading] = useState(true)
    const contextData = useContext(Datacontext)


    useEffect(() => {
        if (checkemail === null) {
            navigate('/login')
            toast('Please login first')
        } else {
            getdata()
        }
        // eslint-disable-next-line
    }, [])

    const getdata = () => {
        axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${checkemail}`)
            .then((data) => {
                setdata(data.data[0])
                setLoading(false)
            })
            .catch((errd) => {
                console.log(errd.massage)
                toast.warning(`Something Went Wrong Refresh Page`)
            })
    }

    const change = (e) => {
        e.preventDefault()
        fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${data.id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(() => {
                toast.success('Details Updated Successfully')
            })
            .catch((err) => {
                toast.error(`Something Went Wrong ${err.massage}`)
            })
    }


    if (role === 'admin') {
        return (
            <>
                <AdminNavbar />
                <div>
                    {loading ? (<Loader />) : (
                        <div>
                            <form onSubmit={change}>
                                <div className='mt-16 dark:bg-black'>
                                    <div className=' p-10'>
                                        <div className="space-y-12">
                                            <div>
                                                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
                                                    Admin Profile
                                                </h2>
                                            </div>

                                            <div className="border-b border-gray-900/10 pb-12">
                                                <h2 className="text-base font-semibold leading-7 text-blue-700">Personal Information</h2>
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">First name</label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                                value={data.fname}
                                                                onChange={(e) => {
                                                                    setdata({ ...data, fname: e.target.value })
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Last name</label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                                value={data.lname}
                                                                onChange={(e) => {
                                                                    setdata({ ...data, lname: e.target.value })
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-3">
                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email ID</label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="email"
                                                                disabled
                                                                className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                                value={data.email}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Mobile Number</label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="number"
                                                                disabled
                                                                className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                                value={data.mobile}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="password"
                                                                disabled
                                                                className="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                                value={data.pass}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-end gap-x-6">
                                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save Change</button>
                                            <button
                                                type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                onClick={() => {
                                                    localStorage.clear()
                                                    navigate('/')
                                                    contextData.setchang(!contextData.change)
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <Footer />
                        </div>
                    )}
                </div>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                {loading ? (<Loader />) : (
                    <div>
                        <form onSubmit={change}>
                            <div className='mt-16 dark:bg-black'>
                                <div className=' p-10'>
                                    <div className="space-y-12">
                                        <div>
                                            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
                                                Profile
                                            </h2>
                                        </div>

                                        <div className="border-b border-gray-900/10 pb-12">
                                            <h2 className="text-base font-semibold leading-7 text-blue-700">Personal Information</h2>
                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">First name</label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                            value={data.fname}
                                                            onChange={(e) => {
                                                                setdata({ ...data, fname: e.target.value })
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Last name</label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0"
                                                            value={data.lname}
                                                            onChange={(e) => {
                                                                setdata({ ...data, lname: e.target.value })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email ID</label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="email"
                                                            disabled
                                                            className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                            value={data.email}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Mobile Number</label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="number"
                                                            disabled
                                                            className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                            value={data.mobile}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-2 sm:col-start-1">
                                                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="password"
                                                            disabled
                                                            className="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-0 dark:focus:ring-0 dark:disabled:text-gray-400"
                                                            value={data.pass}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save Change</button>
                                        <button
                                            type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => {
                                                localStorage.clear()
                                                navigate('/')
                                                contextData.setchang(!contextData.change)
                                            }}>Logout</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <Footer />
                    </div>
                )}
            </>
        )
    }
}

export default Profile
