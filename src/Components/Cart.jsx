import React, { useContext, useEffect, useState } from 'react'
import { Datacontext } from './Context'
import Navbar from './Navbar'
import './Numberstyle.css'
import { useNavigate } from 'react-router-dom'
import CartLoader from './Loader/CartLoader';
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const Cart = () => {
    const navigate = useNavigate()
    const contextData = useContext(Datacontext)
    const { cart, totalprice } = contextData
    const email = sessionStorage.getItem('email')
    const mobile = sessionStorage.getItem('mobile')
    const [proid, setproid] = useState()
    // eslint-disable-next-line
    const price = eval(totalprice) + 4.99

    useEffect(() => {
        if (email === null && mobile === null) {
            navigate('/login')
            toast('Please login first')
        }
        // eslint-disable-next-line 
    },[])

    const items = cart.map((cartdata, index) =>
        <div key={index}>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start dark:bg-gray-800">
                <img src={cartdata.image} alt={cartdata.image} className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px] " />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{cartdata.title}</h2>
                        <p className="text-sm dark:text-white">${cartdata.price}</p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <button
                                type='button'
                                disabled={contextData.loading || cartdata.qtn <= 1}
                                className={`rounded-l bg-gray-100 py-1 px-3.5 duration-100 dark:bg-blue-700 dark:text-white dark:disabled:bg-blue-500 ${cartdata.qtn === 1 && 'cursor-not-allowed'} ${cartdata.qtn > 1 && 'hover:bg-blue-500 hover:text-blue-50'} `}
                                onClick={() => contextData.decreaseQtn(cartdata)}
                            > - </button>
                            <div className="h-8 w-8 border bg-white flex justify-center items-center text-xs outline-none dark:bg-gray-700 dark:border-none dark:text-white">
                                {contextData.loading ? (
                                    <>
                                        {proid === cartdata.productid ? (
                                            <>
                                                <HashLoader
                                                    color="#1D4EDA"
                                                    size={14}
                                                />
                                            </>
                                        ) : (
                                            <span>
                                                {cartdata.qtn}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <span>
                                        {cartdata.qtn}
                                    </span>
                                )}
                            </div>
                            <button type='button' disabled={contextData.loading} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 dark:bg-blue-700 dark:text-white dark:disabled:bg-blue-500"
                                onClick={() => {
                                    setproid(cartdata.productid)
                                    contextData.increaseQtn(cartdata)
                                }}
                            > + </button>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="text-red-700 rounded-full p-1"
                                onClick={() => {
                                    contextData.removeProduct(cartdata)
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className='dark:bg-black min-h-fit'>
            <Navbar />
            {contextData.firstloading ? (
                <CartLoader />
            ) : (
                <>
                    <div className="h-screen pt-20">
                        {cart.length === 0 ? (
                            <>
                                <h1 className="mb-10 text-center text-2xl font-bold dark:text-white">Cart Was Empty</h1>
                            </>
                        ) : (
                            <div className='dark:bg-black'>
                                <h1 className="mb-10 text-center text-2xl font-bold dark:text-white">Cart Items</h1>
                                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
                                    <div className="rounded-lg md:w-2/3">
                                        {items}
                                    </div>
                                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 dark:bg-gray-800">
                                        <div className="mb-2 flex justify-between">
                                            <p className="text-gray-700 dark:text-white">Subtotal</p>
                                            <p className="text-gray-700 dark:text-white">${totalprice}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-700 dark:text-white">Shipping</p>
                                            <p className="text-gray-700 dark:text-white">{totalprice >= 100 ? 'Free Delivery' : '$4.99'}</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex justify-between">
                                            <p className="text-lg font-bold dark:text-white">Total</p>
                                            <div className="">
                                                <p className="mb-1 text-lg font-bold dark:text-white">{totalprice <= 100 ? `$${price.toFixed(2)}` : `$${totalprice}`}</p>
                                            </div>
                                        </div>
                                        <button className="mt-6 w-full rounded-md bg-blue-600 py-1.5 font-medium text-blue-50 hover:bg-blue-700"
                                            onClick={() => {
                                                navigate(`./${contextData.palceorder}`)
                                            }}
                                        >
                                            Check out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart
