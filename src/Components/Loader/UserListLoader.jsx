import React from 'react'
import Skeleton from 'react-loading-skeleton'

const UserListLoader = () => {
    return (
        <div>
            <div className="relative overflow-x-auto sm:rounded-lg mt-20 m-10">
                <div className="flex items-center justify-between pb-4">
                    <div className='rounded-t-lg'>
                        <Skeleton
                            borderRadius={'10px'}
                            height={'2.30rem'}
                            width={'5rem'}
                        />
                    </div>
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <Skeleton
                            borderRadius={'10px'}
                            height={'2.30rem'}
                            width={'20rem'}
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead >
                        <tr>
                            <th colSpan={5}>
                                <Skeleton
                                    width={'100%'}
                                    height={'40px'}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className='grid grid-flow-col justify-stretch'>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1 text-center'>
                                    <Skeleton
                                        width={'40%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='grid grid-flow-col justify-stretch'>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1 text-center'>
                                    <Skeleton
                                        width={'40%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='grid grid-flow-col justify-stretch'>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1 text-center'>
                                    <Skeleton
                                        width={'40%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
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
                                </div>
                            </td>
                        </tr>
                        {/* <tr>
                            <td className='grid grid-flow-col justify-stretch'>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1 text-center'>
                                    <Skeleton
                                        width={'40%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
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
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <div className='grid grid-flow-col justify-stretch'>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
                                    <Skeleton
                                        width={'70%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1 text-center'>
                                    <Skeleton
                                        width={'40%'}
                                        height={'30px'}
                                    />
                                </div>
                                <div className='p-1'>
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
                                </div>
                            </div>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserListLoader
