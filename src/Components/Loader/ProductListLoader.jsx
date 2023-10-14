import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductListLoader = () => {
    return (
        <div className='dark:bg-black h-screen'>
            <div className='pt-16'>
                <div className="flex flex-col p-2 lg:p-3">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                                {/* <div>
                                    <small className='text-red-500 textwarningforproduct'>
                                        *For Best Experience Use PC
                                    </small>
                                </div> */}
                                <div>
                                    <small className='textwarningforproduct'>
                                        <Skeleton
                                            width={'160px'}
                                        />
                                    </small>
                                </div>
                                <table className="w-full text-left text-sm font-light text-gray-500 dark:text-gray-400">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="w-[5%]">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[5%]">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[25%] protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[15%] protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[8%] protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[8%] protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[8%] ">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[8%] protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[8%] protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                            <th scope="col" className="w-[10%]">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'35px'}
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-1 py-3 truncate" >
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="py-1 px-1 max-w-fit items-center">
                                                <div className="w-20 rounded-lg aspect-[10/7]" >
                                                    <Skeleton
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-1 py-3 protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 text-center">
                                                <div className='grid grid-flow-col justify-stretch'>
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-1 py-3 truncate" >
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="py-1 px-1 max-w-fit items-center">
                                                <div className="w-20 rounded-lg aspect-[10/7]" >
                                                    <Skeleton
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-1 py-3 protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 ">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 text-center">
                                                <div className='grid grid-flow-col justify-stretch'>
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-1 py-3 truncate" >
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="py-1 px-1 max-w-fit items-center">
                                                <div className="w-20 rounded-lg aspect-[10/7]" >
                                                    <Skeleton
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-1 py-3 protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 ">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 text-center">
                                                <div className='grid grid-flow-col justify-stretch'>
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-1 py-3 truncate" >
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="py-1 px-1 max-w-fit items-center">
                                                <div className="w-20 rounded-lg aspect-[10/7]" >
                                                    <Skeleton
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-1 py-3 protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 ">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 text-center">
                                                <div className='grid grid-flow-col justify-stretch'>
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-1 py-3 truncate" >
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="py-1 px-1 max-w-fit items-center">
                                                <div className="w-20 rounded-lg aspect-[10/7]" >
                                                    <Skeleton
                                                        width={'100%'}
                                                        height={'100%'}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-1 py-3 protable3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable2">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 protable1">
                                                <Skeleton
                                                    width={'100%'}
                                                    height={'25px'}
                                                />
                                            </td>
                                            <td className="px-1 py-3 text-center">
                                                <div className='grid grid-flow-col justify-stretch'>
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
                                                    />
                                                    <Skeleton
                                                        width={'90%'}
                                                        height={'25px'}
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
        </div>
    )
}

export default ProductListLoader
