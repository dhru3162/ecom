import React from 'react'
import Skeleton from 'react-loading-skeleton'

const HomeLoader = () => {
    return (
        Array(12).fill(0).map((item) => (
            <div>
                <div className='m-5'>
                    <div className=" w-full aspect-[9/12] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center items-center'>
                            <div className="p-5 rounded-t-lg h-60 w-4/6">
                                <Skeleton
                                    height={'100%'}
                                    width={'100%'}

                                />
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            <div>
                                <div>
                                    <Skeleton
                                        height={'25px'}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <p className='w-1/3'><Skeleton /></p>
                                <p className="w-[12%] ms-2"><Skeleton /></p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="w-2/5">
                                    <Skeleton
                                        height={'30px'}
                                    />
                                </span>
                                <div className="rounded-lg py-2.5 w-[45%]">
                                    <Skeleton
                                        height={'30px'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default HomeLoader
