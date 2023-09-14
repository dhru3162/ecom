import React, { useContext } from 'react'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import { Datacontext } from './Context'

const OrderStatus = () => {
  const contextData = useContext(Datacontext)
  console.log(contextData.ab);

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <p className="font-sans self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecom</p>
          </NavLink>
          <div className="flex md:order-2">
          </div>
        </div>
      </nav>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-lg font-bold tracking-tight text-gray-900 md:text-3xl">Your Order Placed Successfully</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">We are dispatch your order within 24 hours</p>



          {contextData.newOrderData.length !== 0 &&
            <div className=' block my-4 w-full h-full'>
              <div className='flex justify-center align-bottom'>
                <img src={contextData.newOrderData[0].image} alt='Item Images' className="w-40 rounded-lg aspect-[10/7] object-contain border-[1px]" />
                {contextData.newOrderData.length > 0 &&
                  <>
                    <small className='relative pt-[30%] md:pt-[25%] inline-block h-full' >
                      <span >
                        + {contextData.newOrderData.length - 1}
                      </span>
                    </small>
                  </>
                }
              </div>
            </div>
          }

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                contextData.setNewOrderData([])
              }}
            >
              Continue Shopping
            </NavLink>
            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-900"
              onClick={() => {
                contextData.setNewOrderData([])
              }}
            >
              Go to my orders
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OrderStatus
