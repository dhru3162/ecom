import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Loader from './Loader';
import Footer from './Footer';
import { Datacontext } from './Context';

const Home = () => {
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const contextData = useContext(Datacontext)

    useEffect(() => {
        data()
    }, [])

    const data = () => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => {
                return res.json()
                    .then((data) => {
                        setproduct(data)
                        setLoading(false)
                    })
            })
            .catch((err) => {
                alert("error " + err.message)
                setLoading(false)
            })
    }

    const cards = product.map((data) => {
        return (
            <>
                <div className='m-5'>
                    <div className=" w-full aspect-[9/12] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`./product/${data.id}`} className='flex justify-center items-center'>
                            <img className="p-8 rounded-t-lg h-60" src={`${data.image}`} alt={`${data.image}`} />
                        </Link>
                        <div className="px-5 pb-5">
                            <Link to={`./product/${data.id}`}>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate h-8">{data.title}</h5>
                            </Link>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg className={`${data.rating.rate < '1' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`${data.rating.rate < '2' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`${data.rating.rate < '3' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`${data.rating.rate < '4' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`${data.rating.rate < '5' ? 'w-4 h-4 text-gray-200 dark:text-gray-600' : 'w-4 h-4 text-yellow-300 mr-1'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{data.rating.rate}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
                                <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" onClick={() => contextData.addToCart(data)}>Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })


    return (
        <>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <div className='mt-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {cards}
                    </div>
                    <Footer />
                </div>
            )
            }
        </>
    )
}

export default Home
