import React, { useContext } from 'react'
import { Datacontext } from './Context'
import Navbar from './Navbar'
import './Numberstyle.css'
import { NavLink } from 'react-router-dom'
import Loader from './Loader'

const Cart = () => {
    const contextData = useContext(Datacontext)
    const { cart, totalprice } = contextData
    const email = sessionStorage.getItem('email')
    const mobile = sessionStorage.getItem('mobile')
    // eslint-disable-next-line
    const price = eval(totalprice) + 4.99

    const items = cart.map((cartdata, index) =>
        <div key={index}>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={cartdata.image} alt={cartdata.image} className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{cartdata.title}</h2>
                        <p className="text-sm">${cartdata.price}</p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <button
                                type='button'
                                className={`cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 ${cartdata.qtn > 1 && 'hover:bg-blue-500 hover:text-blue-50'} `}
                                onClick={() => contextData.decreaseQtn(cartdata)}
                            > - </button>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" min="1" value={cartdata.qtn}
                                onChange={(e) => e.preventDefault()}
                            />
                            <button type='button' className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                onClick={() => contextData.increaseQtn(cartdata)}
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
        <div>
            <Navbar />
            {contextData.loading ? (
                <Loader />
            ) : (
                <div>
                    {email === null && mobile === null ? (
                        <div>
                            {cart == null &&
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
                            }
                        </div>

                    ) : (
                        <div className="h-screen pt-20">
                            {cart.length === 0 ? (
                                <div>
                                    <h1 className="mb-10 text-center text-2xl font-bold">Cart Was Empty</h1>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                        <div className="rounded-lg md:w-2/3">
                                            {items}
                                        </div>
                                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                            <div className="mb-2 flex justify-between">
                                                <p className="text-gray-700">Subtotal</p>
                                                <p className="text-gray-700">${totalprice}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-gray-700">Shipping</p>
                                                <p className="text-gray-700">{totalprice >= 100 ? 'Free Delivery' : '$4.99'}</p>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="flex justify-between">
                                                <p className="text-lg font-bold">Total</p>
                                                <div className="">
                                                    <p className="mb-1 text-lg font-bold">{totalprice <= 100 ? `$${price.toFixed(2)}` : `$${totalprice}`}</p>
                                                    {/* <p className="text-sm text-gray-700">Including Tax</p> */}
                                                </div>
                                            </div>
                                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-700">Check out</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Cart
