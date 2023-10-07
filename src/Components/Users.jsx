import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import axios from 'axios'
import { toast } from 'react-toastify'
import UserListLoader from './Loader/UserListLoader'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import { HashLoader } from 'react-spinners'

const Users = () => {
    const role = sessionStorage.getItem('role')
    const [collapse, setcollapse] = useState(true)
    const [store, setstore] = useState([])
    const [search, setsearch] = useState("")
    const [deleteuserid, setdeleteuserid] = useState()
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
        setdeleteuserid(id)
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
                })
                setstore(store.filter((pro) => pro.id !== id))
                setLoading(false)
            })
            .catch((err) => {
                toast.error(`${err.massage}`)
                setLoading(false)
            })
    }

    if (role === 'admin') {
        return (
            <div className=' dark:bg-black'>
                {firstloading ? (
                    <div className='dark:bg-black'>
                        <AdminNavbar />
                        <UserListLoader />
                    </div>
                ) : (
                    <>
                        <AdminNavbar />
                        <div className="relative overflow-x-auto sm:rounded-lg mt-16 p-6">
                            <div className="flex items-center justify-between pb-4">
                                <div>
                                    <button
                                        className="inline-flex items-center outline-none text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                        onClick={() => {
                                            navigate('/users/adduser')
                                        }}
                                    >
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
                                        <tr key={index} className="h-[60px] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600">
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
                                                {loading ? (
                                                    <>
                                                        {deleteuserid === user.id ? (
                                                            <>
                                                                <button type='button' className="w-[42px] h-[20px] font-medium text-red-600 dark:text-red-500 hover:underline mx-3" >
                                                                    <div className='flex justify-center items-center h-full'>
                                                                        <HashLoader
                                                                            color="#E33026"
                                                                            size={12}
                                                                        />
                                                                    </div>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button type='button' className="font-medium text-red-600 dark:text-red-500 hover:underline mx-3">Delete</button>
                                                            </>
                                                        )}

                                                    </>
                                                ) : (
                                                    <>
                                                        <button type='button' className="font-medium text-red-600 dark:text-red-500 hover:underline mx-3 " onClick={() => deleteuser(user.id)}>Delete</button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
                }

            </div>
        )
    } else if (role === null) {
        return (
            <>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <NavLink to="/" className="flex items-center">
                            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                            <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
                        </NavLink>
                        <div className="flex md:order-2">
                            <button data-target='#tttt' data-collapse-toggle="#tttt" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setcollapse(!collapse)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${collapse ? 'hidden' : ''}`} id="tttt">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/feature" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Feature</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
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
            </>
        )

    } else {
        return (
            <>
                <PageNotFound />
            </>
        )
    }
}

export default Users
