import React, { useContext, useState } from 'react'
import { Datacontext } from './Context'
import Navbar from './Navbar'
import './Numberstyle.css'

const Cart = () => {
    const contextData = useContext(Datacontext)
    const { cart, gettotle } = contextData
    const [qut, setqut] = useState(1)


    const items = cart.map((cartdata) => {
        return (
            <>
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={cartdata.image} alt={cartdata.image} className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{cartdata.title}</h2>
                            <p className="text-sm">${cartdata.price}</p>
                        </div>
                        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                                <button type='button' className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => qut > 1 && setqut(qut - 1)}> - </button>
                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={qut} min="1" onChange={(e) => setqut(e.target.value)} />
                                <button type='button' className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setqut(qut + 1)}> + </button>
                            </div>
                            <div className="flex items-center">
                                <button type="button" className="text-red-700 rounded-full p-1 ">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <div>
            <Navbar />
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
                                    <p className="text-gray-700">{gettotle}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Shipping</p>
                                    <p className="text-gray-700">$4.99</p>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">$134.98</p>
                                        {/* <p className="text-sm text-gray-700">including VAT</p> */}
                                    </div>
                                </div>
                                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-700">Check out</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
