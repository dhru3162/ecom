import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { Datacontext } from './Context'
import Skeleton from 'react-loading-skeleton'
import { HashLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import { toast } from 'react-toastify'

const ProductPage = () => {
    const role = sessionStorage.getItem('role')
    const email = sessionStorage.getItem('email')
    const mobile = sessionStorage.getItem('mobile')
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const contextData = useContext(Datacontext)
    const [collapse, setcollapse] = useState(true)

    useEffect(() => {
        if (email === null && mobile === null) {
            navigate('/login')
            toast('Please login first')
        } else if (role === 'user') {
            navigate('/')
            toast('Something went wrong')
        }
        getProduct()
        // eslint-disable-next-line
    }, [])

    const getProduct = async () => {
        const data1 = await fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts/${id}`)
        const myJson = await data1.json()
        setData({ id: myJson.id, title: myJson.title, rate: myJson.rating.rate, price: myJson.price, description: myJson.description, image: myJson.image })
        setLoading(false)
    }

    if (role === 'admin') {
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
            </>
        )

    } else {
        return (
            <div>
                <Navbar />
                {loading ? (
                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <div className=" lg:w-1/2 w-full h-96 aspect-square object-contain object-center" >
                                    <Skeleton
                                        height="100%"
                                        width='100%'
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h1 className="text-3xl title-font font-medium mb-1">
                                        <Skeleton count={2} />
                                    </h1>
                                    <p className='mt-3 mb-3'>
                                        <Skeleton
                                            width='50%'
                                        />
                                    </p>
                                    <p className="leading-relaxed">
                                        <Skeleton count={3} />
                                    </p>
                                    <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    </div>
                                    <div className="flex">
                                        <h1 className='w-24'>
                                            <Skeleton
                                                height='40px'
                                            />
                                        </h1>
                                        <h1 className=" ml-auto w-24">
                                            <Skeleton
                                                height='40px'
                                            />
                                        </h1>
                                        <button className="rounded-full w-10 h-10 bg-gray-200 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <Skeleton
                                                circle
                                                height="100%"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div>
                        <section className="text-gray-700 body-font overflow-hidden bg-white">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <img alt="ecommerce" className="p-2 lg:w-1/2 w-full h-96 aspect-square object-contain object-center rounded border border-gray-200" src={data.image} />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
                                        <div className="flex mb-4">

                                            <div className="flex items-center mt-2.5">
                                                <svg className={`${data.rate < '1' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className={`${data.rate < '2' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className={`${data.rate < '3' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className={`${data.rate < '4' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className={`${data.rate < '5' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{data.rate}</span>
                                            </div>

                                        </div>
                                        <p className="leading-relaxed">{data.description} </p>
                                        <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                        </div>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
                                            {contextData.loading ? (
                                                <>
                                                    <button className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded" onClick={() => contextData.addToCart(data)}>
                                                        <div className='flex justify-center items-center h-full'>
                                                            <HashLoader
                                                                color="#c7cbfd"
                                                                size={19}
                                                            />
                                                        </div>
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded" onClick={() => contextData.addToCart(data)}>
                                                        Add To Cart
                                                    </button>
                                                </>
                                            )}
                                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        )
    }
}

export default ProductPage
