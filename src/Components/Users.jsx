import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import axios from 'axios'
import { toast } from 'react-toastify'
import UserListLoader from './Loader/UserListLoader'
import Loader from './Loader/Loader'

const Users = () => {
    const role = sessionStorage.getItem('role')
    const [store, setstore] = useState([])
    const [search, setsearch] = useState("")
    const [firstloading, setFIrstLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`)
            .then((res) => {
                const udata = res.data
                console.log(res.data)
                const users = udata.filter((pro) => pro.role !== 'admin')
                setstore(users)
                setFIrstLoading(false)
                setLoading(false)
            })
            .catch((err) => {
                toast.error(`${err.massage}`)
                setFIrstLoading(false)
                setLoading(false)
            })
    }

    const searchdata = store.filter(
        (pro) =>
            pro.mobile.toLowerCase().includes(search.toLowerCase()) ||
            pro.email.toLowerCase().includes(search.toLowerCase()) ||
            pro.id.toLowerCase().includes(search.toLowerCase())
    )

    const deleteuser = (id) => {
        setLoading(true)
        axios.delete(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin/${id}`)
            .then(() => {
                toast.success('User Deleted Successfully', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getData()
            })
            .catch((err) => {
                toast.error(`${err.massage}`)
                setLoading(false)
            })
    }


    return (
        <>
            {firstloading ? (
                <>
                    <AdminNavbar />
                    <UserListLoader />
                </>
            ) : (
                <>
                    <AdminNavbar />
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            {role === 'admin' ? (
                                <>
                                    <div className="relative overflow-x-auto sm:rounded-lg mt-20 m-10">
                                        <div className="flex items-center justify-between pb-4">
                                            <div>
                                                <button className="inline-flex items-center outline-none text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                    Add User
                                                </button>

                                            </div>
                                            <label className="sr-only">Search</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="block p-2 pl-10 text-sm text-gray-900 border border-blue-700 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                                    placeholder="Search for mobile, email & userid"
                                                    onChange={(e) => {
                                                        setsearch(`${e.target.value}`)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        User name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Mobile No.
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        user ID
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {searchdata.map((user, index) =>
                                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {user.fname} {user.lname}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {user.mobile}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {user.email}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {user.id}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <button type='button' className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => navigate(`/users/${user.id}`)}>Edit</button>
                                                            <button type='button' className="font-medium text-red-600 dark:text-blue-500 hover:underline mx-3" onClick={() => deleteuser(user.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <Navbar />
                                    <PageNotFound />
                                </>
                            )}
                        </>
                    )}
                </>
            )
            }

        </>
    )
}

export default Users
