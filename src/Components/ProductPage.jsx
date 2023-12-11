import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { Datacontext } from './Context'
import Skeleton from 'react-loading-skeleton'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const ProductPage = () => {
    const role = localStorage.getItem('role')
    const email = localStorage.getItem('email')
    const mobile = localStorage.getItem('mobile')
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const contextData = useContext(Datacontext)

    useEffect(() => {
        if (email === null && mobile === null) {
            navigate('/login')
            toast('Please login first')
        } else if (role === 'admin') {
            navigate('/')
            toast('Something went wrong')
        } else {
            getProduct()
        }
        // eslint-disable-next-line
    }, [])

    const getProduct = async () => {
        const data1 = await fetch(`https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomProducts/${id}`)
        const myJson = await data1.json()
        setData({ id: myJson.id, title: myJson.title, rate: myJson.rating.rate, price: myJson.price, description: myJson.description, image: myJson.image })
        setLoading(false)
    }


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

export default ProductPage
