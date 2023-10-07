import React from 'react'
import { Link } from 'react-router-dom'
import github from '../Logos/github.png'
import twitter from '../Logos/twitter.png'
import facebook from '../Logos/facebook.png'
import instagram from '../Logos/instagram (1).png'
import logo from './logo.png'


const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800">
                    <div className="flex justify-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                            <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
                        </Link>
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                        consequuntur amet culpa cum itaque neque.
                    </p>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/about">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/">
                                Careers
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/f&q">
                                F&Q
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/feature">
                                Feature
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/blog">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link className="text-gray-700 transition hover:text-gray-700/75 dark:text-white" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <Link to="/" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <img src={facebook} className="h-6 w-6 text-gray-700 dark:text-white" alt={github} />
                            </Link>
                        </li>

                        <li>
                            <Link to="/" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <img src={instagram} className="h-6 w-6 text-gray-700 dark:text-white" alt={github} />
                            </Link>
                        </li>

                        <li>
                            <Link to="/" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <img src={twitter} className="h-6 w-6 text-gray-700 dark:text-white" alt={github} />
                            </Link>
                        </li>

                        <li>
                            <Link to="/" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
                                <img src={github} className="h-6 w-6 text-gray-700 dark:text-white" alt={github} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
