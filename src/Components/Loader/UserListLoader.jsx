import React from 'react'
import Skeleton from 'react-loading-skeleton'

const UserListLoader = () => {
    return (
        <div className='dark:bg-black h-screen pt-16'>
            <div className="flex flex-col p-2 lg:p-3">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 dark:bg-black dark:h-screen">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <div className="relative overflow-x-auto sm:rounded-lg p-3 lg:p-3 lg:pt-0">
                                <div className="flex items-center justify-between w-full" >
                                    <div className='w-[30%] md:[15%] lg:w-[10%]'>
                                        <Skeleton
                                            width={'100%'}
                                            height={'35px'}
                                        />
                                    </div>
                                    <div className='flex justify-end w-[60%] md:[15%] lg:w-[25%]'>
                                        <div className="relative w-full">
                                            <Skeleton
                                                height={'35px'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="min-w-full text-left text-sm font-light text-gray-500 dark:text-gray-400">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Skeleton
                                                width={'100%'}
                                                height={'35px'}
                                            />
                                        </th>
                                        <th scope="col" className="tableresponsive">
                                            <Skeleton
                                                width={'100%'}
                                                height={'35px'}
                                            />
                                        </th>
                                        <th scope="col" className="tableresponsive">
                                            <Skeleton
                                                width={'100%'}
                                                height={'35px'}
                                            />
                                        </th>
                                        <th scope="col">
                                            <Skeleton
                                                width={'100%'}
                                                height={'35px'}
                                            />
                                        </th>
                                        <th scope="col">
                                            <Skeleton
                                                width={'100%'}
                                                height={'35px'}
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-3 py-3 text-center" >
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">

                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <div className='grid grid-flow-col justify-stretch'>
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                            </div>

                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="px-3 py-3 text-center" >
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">

                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <div className='grid grid-flow-col justify-stretch'>
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                            </div>

                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="px-3 py-3 text-center" >
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">

                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <div className='grid grid-flow-col justify-stretch'>
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                            </div>

                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="px-3 py-3 text-center" >
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">

                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <div className='grid grid-flow-col justify-stretch'>
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                            </div>

                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="px-3 py-3 text-center" >
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">

                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center tableresponsive">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <Skeleton
                                                width={'80%'}
                                                height={'30px'}
                                            />
                                        </td>
                                        <td className="px-3 py-3 text-center">
                                            <div className='grid grid-flow-col justify-stretch'>
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                                <Skeleton
                                                    width={'90%'}
                                                    height={'30px'}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserListLoader
