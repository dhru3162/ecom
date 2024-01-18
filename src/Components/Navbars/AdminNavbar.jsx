import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = (a) => {
    const [collapse, setcollapse] = useState(true)
    const checklogin = localStorage.getItem('email')
    const location = useLocation()
    const curruntRoute = location.pathname

    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
                    </NavLink>
                    <div className="flex md:order-2">
                        <NavLink to={checklogin === null ? '/login' : '/profile'} type="button" className="py-2 pr-2 lg:pr-4 lg:pl-3 lg:ml-5 md:pr-4 md:pl-3 md:ml-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <i className="bi bi-person-circle"></i>
                        </NavLink>
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
                                <NavLink to="/" className={`${curruntRoute === '/' ? 'text-blue-700' : 'text-gray-900'} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="location">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={`${curruntRoute === '/users' ? 'text-blue-700' : 'text-gray-900'} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={`${curruntRoute === '/products' ? 'text-blue-700' : 'text-gray-900'} block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
