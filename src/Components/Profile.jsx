import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import Loader from './Loader'

const Profile = () => {
    const navigate = useNavigate()
    const checkemail = sessionStorage.getItem('email')
    const checkmobile = sessionStorage.getItem('mobile')
    const [data, setdata] = useState({ fname: "", lname: "", mobile: "", email: "", pass: "" })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getdata()
        // eslint-disable-next-line
    }, [])

    const getdata = () => {
        if (checkemail != null) {
            axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${checkemail}`)
                .then((data) => {
                    console.log(data.data[0])
                    setdata(data.data[0])
                    setLoading(false)
                })
                .catch((errd) => {
                    console.log(errd.massage)
                    setLoading(false)
                })
        } else {
            axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?mobile=${checkmobile}`)
                .then((data) => {
                    console.log(data.data[0])
                    setdata(data.data[0])
                    setLoading(false)
                })
                .catch((errd) => {
                    console.log(errd.massage)
                    setLoading(false)
                })
        }
    }



    return (
        <>
            <Navbar />
            {loading ? (<Loader />) : (
                <div>
                    <form>
                        <div className='mt-16'>
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
                                                <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={data.fname}
                                                        onChange={(e) => {
                                                            setdata({ ...data, fname: e.target.value })
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={data.lname}
                                                        onChange={(e) => {
                                                            setdata({ ...data, lname: e.target.value })
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">Email ID</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="email"
                                                        disabled
                                                        className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={data.email}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        disabled
                                                        className="block ps-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={data.mobile}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                                <div className="mt-2">
                                                    <input
                                                        type="password"
                                                        disabled
                                                        className="block w-full ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                            sessionStorage.clear()
                                            navigate('/')
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

export default Profile
