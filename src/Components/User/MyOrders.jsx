import React, { useEffect } from 'react'
import Navbar from '../Navbars/Navbar'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    // const navigate = useNavigate()

    useEffect(() => {

        toast('Coming Soon', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        // eslint-disable-next-line 
    }, [])



    return (
        <>
            <Navbar />
            <div className='pt-16'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-8">
                    <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 max-lg:hidden">
                                    Email ID
                                </th>
                                <th scope="col" className="px-6 py-3 max-sm:hidden">
                                    Contect No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    name
                                </th>
                                <td className="px-6 py-4 max-lg:hidden">
                                    email
                                </td>
                                <td className="px-6 py-4 max-sm:hidden">
                                    mobile
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2 justify-normal w-full">
                                        <Link
                                            // href={`/users/${user.id}`}
                                            href={``}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type='button'
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        // onClick={() => {
                                        //     dispatch(deleteUserData(user.id))
                                        // }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MyOrders
